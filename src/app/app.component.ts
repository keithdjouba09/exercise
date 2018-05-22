import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import {Popup} from 'ng2-opd-popup';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  results: Object;
  searchTerm$ = new Subject<string>();
  //title = 'app works!';
  constructor(private searchService: SearchService,private popup: Popup) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });

  }
  ClickButton(){
    this.popup.show();
  }
}
