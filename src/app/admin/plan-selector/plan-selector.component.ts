import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Plan } from '../../models/plan';
import { ApiService } from '../../services/api.service';
import { RazorPayService } from '../../services/razorpay.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { WindowService } from '../../services/window.service';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { environment } from '../../../environments/environment';
import { EmptyComponent } from '../empty/empty.component';
import { HomeComponent } from '../../components/home/home.component';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  // styleUrls: ['./plan-selector.component.css']
})
export class PlanSelectorComponent implements OnInit {

  plans: Plan[];
  paid: boolean;

  private email: string;
  private phone: string;

  constructor(private api: ApiService,
    private razorPay: RazorPayService,
    private appRef: ApplicationRef,
    private router: Router,
    private winRef: WindowService,
    public navCtrl: NavController,
    public navParams: NavParams, 
    private goback:GobackService ) { }

  ngOnInit() {
    this.goback.urlInit();
    this.api.plans.subscribe(data => {
      this.plans = [];

      data.plans.forEach(element => {
        let plan = new Plan(element.name, element.cost, element.maxUsers, element.maxAdmins);

        plan.id = element._id;

        this.plans.push(plan);
      });

      this.email = data.email;
      this.phone = data.phone;
    });
  }

  selectPlan(plan: Plan)
  {
    if (this.paid)
      return;

    if (plan.cost != 0) {
      this.razorPay.initPay(this.phone,
        this.email,
        plan.cost,
        "ZAAA " + plan.name,
        response => {
          console.log(response.razorpay_payment_id);

          this.paid = true;

          this.api.setPlan(plan, response.razorpay_payment_id).subscribe(
            data => {
                this.appRef.tick();
                this.navCtrl.push(EmptyComponent);
            },
            err => alert("Plan was not saved.\n\nContact support with reference no: " + response.razorpay_payment_id)
          );
        });
    }
    else {
      this.paid = true;
      
      this.api.setPlan(plan, '').subscribe(
        data => {
          this.router.navigateByUrl('/dashboard');
        },
        err => alert("Plan was not saved.")
      );
    }
  }

}
