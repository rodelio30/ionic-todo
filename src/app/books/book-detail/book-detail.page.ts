import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bible } from '../bible.model';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  // loadedBook: Book;
  loadedBook: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('bookId')){
        // redirect
        this.router.navigate(['/books']);
        // console.log('Hindi gumana');
        return;
      }
      const bookId = paramMap.get('bookId');
      this.loadedBook = this.booksService.getBook(bookId);
    });
  }

}
