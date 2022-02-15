import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books: Book[] = [
    {
    bookId: 'Mat',
    bookName: 'Mateo',
    chapter: 1,
    verse: 1,
    text: 'this is verse one'
    },
    {
      bookId: 'Mar',
      bookName: 'Marcos',
      chapter: 1,
      verse: 1,
      text: 'this is verse one'
      }
];
  constructor() { }

  ngOnInit() {
  }

}
