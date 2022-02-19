import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [
    {
    bookId: 'Mat',
    bookName: 'Mateo',
    chapter: 1,
    verse: 1,
    text: 'this is verse one'
    },
    {
    bookId: 'Mat2',
    bookName: 'Mateo',
    chapter: 1,
    verse: 2,
    text: 'this is verse two'
    },
    {
    bookId: 'Mat3',
    bookName: 'Mateo',
    chapter: 1,
    verse: 3,
    text: 'this is verse three'
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

  getAllBooks() {
    return [...this.books];
  }
  getBook(bookId: string) {
    return {...this.books.find( book => book.bookId === bookId)};
  }
}
