import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { ApiService } from 'app/services';
import { CoUser } from './co-user';
import { UserRoles } from './user-roles';

@Injectable()
export class CoUserApiService {

  constructor(private api: ApiService) { }

  get coUsers() : Observable<CoUser[]> {
    return this.api.get('/user/co_user').pipe(
      map(data => {
        let coUsers: CoUser[] = [];

        if (data.success) {
          data.co_users.forEach(element => {
            let coUser = new CoUser();

            coUser.name = element.name;
            coUser.designation = element.designation;
            coUser.email = element.email;
            coUser.phone = element.phone;

            coUser.isAdmin = element.isAdmin;

            coUser.id = element._id;

            coUsers.push(coUser);
          });
        }

        return coUsers;
      })
    );
  }

  createCoUser(coUser: CoUser) : Observable<any> {
    return this.api.post('/user/co_user', {
      name: coUser.name,
      designation: coUser.designation,
      email: coUser.email,
      phone: coUser.phone,
      isAdmin: coUser.isAdmin
    });
  }

  getRoles(coUserId: string) : Observable<UserRoles> {
    let base = this.api.get('/user/role/' + coUserId);

    return base.pipe(
      map(data => {
        let roles = new UserRoles();

        if (data.success) {
          roles.release_order = data.msg.Release_order;
          roles.invoice = data.msg.Invoice;
          roles.payment_receipts = data.msg.Payment_receipts;
          roles.accounts = data.msg.Accounts;
        }

        return roles;
      })
    );
  }

  setRoles(coUserId : string, roles : UserRoles) : Observable<any> {
    return this.api.post('/user/role', { 
      id: coUserId,
      release_order: roles.release_order,
      invoice: roles.invoice,
      payment_receipts: roles.payment_receipts,
      accounts: roles.accounts
    });
  }

  deleteCoUser(coUser: CoUser) : Observable<any> {
    return this.api.delete('/user/co_user/' + coUser.id);
  }

  getUser() : Observable<any> {
    return this.api.getUser();
  }

}
