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
        },
        // handler: callback
      };

    var successCallback = function(success) {
      alert('payment_id: ' + success.razorpay_payment_id)
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
      callback(success)
    }

    var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
    }

    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options)
  }
}
