import { GobackService } from 'app/services';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Platform } from 'ionic-angular';
import { UserProfile } from '../../models/user-profile';
import { ActivatedRoute } from '@angular/router';
import { DashboardApiService } from '../../services/dashboard-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // 
})
export class DashboardComponent implements OnInit {

  admin: boolean;

  duesData;

  roChartResults: {
    name: string,
    series: {
      name: any,
      value: number
    }[]
  }[];

  invoices1 = {
    generated: 0,
    pending: 0
  }

  payments1 = {
    collected: 0,
    shadow: 0,
    completed: 0,
    received: 0
  }

  payments2 = {
    pending: 0,
    received: 0
  }

  mhi1 = {
    pending: 0,
    received: 0
  }

 constructor(public goback: GobackService, private dashboardApi: DashboardApiService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { user: UserProfile }) => {
      this.admin = data.user.isAdmin;
    });

    this.dashboardApi.getInvoiceData().subscribe(data => {
      if (data.count != 0) {
        this.invoices1.generated = data.generated * 100 / data.count;
        this.invoices1.pending = 100 - this.invoices1.generated;
      }
    });

    this.duesData = this.dashboardApi.getDuesData();

    this.dashboardApi.getRoChartData().subscribe(data => {
      if (data.success) {
        this.roChartResults = [
          {
            name: 'Generated',
            series: []
          },
          {
            name: 'Total',
            series: []
          }
        ];

        let d : {
          _id: {
            day: string,
            month: string,
            year: string
          },
          count: number,
          totalAmount: number,
          generated: number
        }[] = data.releaseOrders;

        d.forEach(element => {
          this.roChartResults[0].series.push({ name: element._id.day, value: element.generated });
          this.roChartResults[1].series.push({ name: element._id.day, value: element.totalAmount });
        });
      }
    });

    this.updatePayments();

    this.dashboardApi.getMhiData().subscribe(data => {
      let total1 = data.pendingAmount + data.collectedAmount;

      if (total1 != 0) {
        this.mhi1.pending = data.pendingAmount * 100 / total1;
        this.mhi1.received = data.collectedAmount * 100 / total1;
      }
    });
  }

  private updatePayments() {
    this.dashboardApi.getPaymentsData().subscribe(data => {      
      let total1 = data.collectedAmount + data.shadow + data.completed;
      
      if (total1 != 0) {
        this.payments1.collected = data.collectedAmount * 100 / total1;
        this.payments1.shadow = data.shadow * 100 / total1;
        this.payments1.completed = data.completed * 100 / total1;
      }

      let total2 = data.collectedAmount + data.pendingAmount;
      
      if (total2 != 0) {
        this.payments2.received = data.collectedAmount * 100 / total2;
        this.payments2.pending = data.pendingAmount * 100 / total2;
      }
    });
  }
}
