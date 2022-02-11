import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  secJohn: any;
  public title = '2 John';
  constructor() {}

  ngOnInit(){
    fetch('./assets/inputFile/newbible.json').then(res => res.json()).then(json => {
      this.secJohn = json.filter(item => item.book_name === '2 John');
    });
    // this.results = this.results.filter(item => item.book_name === '2 John');
  }
}
