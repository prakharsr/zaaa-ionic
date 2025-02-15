import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Executive } from '../executive';
import { ExecutiveApiService } from '../executive-api.service';
import { DialogService } from 'app/services';
import { PageData } from 'app/models';

@Component({
  selector: 'app-executive-list',
  templateUrl: './executive-list.component.html',
  
})
export class ExecutiveListComponent implements OnInit {

  executives: Executive[] = [];

  pageCount: number;
  page: number;
  
  query: string;
  searchFailed = false;

constructor(private api: ExecutiveApiService,
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { list: PageData<Executive> }) => {
        this.executives = data.list.list;
        this.pageCount = data.list.pageCount;
        this.page = data.list.page;
      });
  }

  search = (text: Observable<string>) =>
    text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term =>
        this.api.searchExecutives(term)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return of([]);
          }));

  inputFormatter = (result: Executive) => {
    this.router.navigateByUrl('/dir/executives/' + result.id);
  }

  deleteExecutive(executive: Executive) {
    this.dialog.confirmDeletion("Are you sure you want to delete this executive?").subscribe(confirm => {
      if (!confirm)
        return;

      this.api.deleteExecutive(executive).subscribe(
        data => {
          if (data.success) {
            this.executives = this.executives.filter(c => c.id !== executive.id);
          }
          else {
            console.log(data);
          }
        },
        err => console.log(err)
      );
    });
  }

  navigate(i: number) {
    this.router.navigate(['/dir/executives/list', i]);
  }
}
