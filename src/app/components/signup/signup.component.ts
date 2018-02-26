import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  cpassword: string;

  @Output() done = new EventEmitter();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  submit()
  {
    this.api.signup(this.email, this.password);

    this.done.emit();
  }
}
