import { Component, OnInit } from '@angular/core';
import { Bible } from './bible.model';
import { BiblesService } from './bibles.service';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books: Book[];
  newTest: Bible[];

  constructor(
    private booksService: BooksService
    ) { }

  ngOnInit() {
    this.books = this.booksService.getAllBooks();
       fetch('./assets/inputFile/newbible.json').then(res => res.json()).then(json => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      this.newTest = json.filter((item: { bookName: string }) => item.bookName === '2 John');
    });
  }

}
