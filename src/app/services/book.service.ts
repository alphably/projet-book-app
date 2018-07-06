import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from  '../../model/author.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   private urlServer: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }


  getBooks() {
    // renvoie Observable, la souscription se fera côté composant
    return this.http.get(this.urlServer + '/books');
  }
}
