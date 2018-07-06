import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from  '../../model/author.interface';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  au: any[] = [];

  constructor(private bookService: AuthorService) { }

  ngOnInit() {
    this.bookService
     .getAuthors()
     .subscribe((res) => {
       this.books = res;
       console.log(this.books);
     });
  }

}
