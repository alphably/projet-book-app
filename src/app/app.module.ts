import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { DetailAuthorComponent } from './detail-author/detail-author.component';

// table de routage

const appRoutes: Routes = [

  { path: 'authors', component: AuthorComponent },
  { path: 'books', component: BookComponent },
  { path: 'authors/:id', component: DetailAuthorComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookComponent,
    AuthorComponent,
    DetailAuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthorService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
