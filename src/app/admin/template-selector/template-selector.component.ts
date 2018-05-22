import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Template } from '@aaman/main/template';
import { ApiService } from '@aaman/main/api.service';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  
})
export class TemplateSelectorComponent implements OnInit {

  invoiceTemplate: Template;
  releaseOrderTemplate: Template;
  paymentReceiptTemplate: Template;

  jurisdiction: string;

  templates: Template[];

  @Output() done = new EventEmitter();

  constructor(public goback: GobackService, private api: ApiService) { }

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
