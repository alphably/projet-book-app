import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Author } from  '../../model/author.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService
     .getBooks()
     .subscribe((res) => {
       this.books = res;
       console.log(this.books);
     });
  }

}
