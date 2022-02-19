import { Injectable } from '@angular/core';
import { Bible } from './bible.model';

@Injectable({
  providedIn: 'root'
})
export class BiblesService {
  bibles: any;
  constructor() { }

  getAllData(){
    fetch('./assets/inputFile/newbible.json').then(res => res.json()).then(json => {
      json.push(this.bibles);
    });
  }

}
