import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  loadedBook: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('bookId')){
        //r redirect
        return;
      }
      const bookId = paramMap.get('bookId');
      this.loadedBook = this.booksService.getBook(bookId);
    });
  }

}
