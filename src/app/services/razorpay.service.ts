import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { environment } from '../../environments/environment';
import { DashboardComponent } from '../components/dashboard/dashboard.component';


@Injectable()
export class RazorPayService {

    constructor(private windowService: WindowService) {
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
        handler: callback
      };

      // var successCallback = function(success) {
      //   callback(success)
      //   payment_id => {this.navCtrl.push(DashboardComponent)}
      // }
      var successCallback = function(success) {
        callback(success)
      }

      var cancelCallback = function(error) {
        callback(error)
      }
      
      RazorpayCheckout.open(options);
      RazorpayCheckout.on('payment.success', successCallback);
      // RazorpayCheckout.on('payment.cancel', cancelCallback);
    }
}