import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Template } from '../../models/template';
import { ApiService } from '../../services/api.service';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  // styleUrls: ['./template-selector.component.css']
})
export class TemplateSelectorComponent implements OnInit {

  invoiceTemplate: Template;
  releaseOrderTemplate: Template;
  paymentReceiptTemplate: Template;

  jurisdiction: string;

  templates: Template[];

  @Output() done = new EventEmitter();

  constructor(private api: ApiService, private goback:GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.api.templates.subscribe(data => {
      this.templates = data;
      this.invoiceTemplate = this.releaseOrderTemplate = this.paymentReceiptTemplate = data[0];
    });
  }

  submit() {
    this.done.emit();
  }
}
