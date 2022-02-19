/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Bible } from '../books/bible.model';
import { BiblesService } from '../books/bibles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;
  public swiperConfig: SwiperOptions = {};
  public mattTitle = 'Matthew';
  matt: any;
  matth: any;
  chapMatt: any;
  copyLibro: any;
  filterChapter: any;
  filMat: any;

  unique: any;
  newTest: any;
  bibles: any;
  posts = null;

  constructor(private biblesService: BiblesService) {}

  ngOnInit(){
    // console.log(this.getChapterBookData());
    this.filterMatthew();

    fetch('./assets/inputFile/newbible.json').then(res => res.json()).then(json => {

      // console.log('OUTPUT: ', json);
      this.copyLibro = json;
      this.matt = this.copyLibro.filter((item: { bookId: string}) => item.bookId === 'Matt');

      this.chapMatt = this.matt.filter((obj: { chapter: any }, pos: any, arr: any[]) => arr
                               .map((mapObj: { chapter: any }) => mapObj.chapter)
                               .indexOf(obj.chapter) === pos);
      // console.log(this.chapMatt);
      // this.secJohn = json;
      // this.matt = json.filter((item: { bookId: string }) => item.bookId === 'Matt');
    });
  }
  readJsonData(){
    fetch('./assets/inputFile/newbible.json').then(res=>res.json()).then(json=>{
        console.log('OUTPUT: ', json);
        //DO YOUR STAFF
    });
  }
  getChapterBookData(){
    fetch('./assets/inputFile/newbible.json').then(res=>res.json()).then(json=>{
          json;
    });
  }
  filterMatthew(){
    fetch('./assets/inputFile/newbible.json').then(res=>res.json()).then(json=>{
      this.filMat = json.filter((item: { bookId: string}) => item.bookId === 'Matt');
    });
    // return this.matt = this.getChapterBookData().filter((item: { bookId: string}) => item.bookId === 'Matt');
  }
}
