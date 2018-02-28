import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class RazorPayService {

    constructor() {
    }

    public initPay(number: string,
      email: string,
      amountInRupees: number,
      purchaseDescription: string,
      callback: any): void {

      let options = {
        key: environment.razorPay,
        amount: amountInRupees * 100,
        name: "ZAAA",
        description: purchaseDescription,
        prefill: {
          email: email,
          contact: number
        },
        theme: {
          color: "#f37254"
        }
        ,
         handler: callback
      };
      
      var successCallback = function(success) {
        callback(success)
      }
      
      RazorpayCheckout.on('payment.success', successCallback)
      RazorpayCheckout.open(options)
    
    }
}