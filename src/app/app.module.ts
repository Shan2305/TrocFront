import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './index-user/user-list/user-list.component';
import { UserCreateComponent } from './index-user/user-create/user-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { IndexUserComponent } from './index-user/index-user.component';
import { IndexArticlesComponent } from './index-articles/index-articles.component';
import { ArticleListComponent } from './index-articles/article-list/article-list.component';
import { ArticleCreateComponent } from './index-articles/article-create/article-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    IndexUserComponent,
    IndexArticlesComponent,
    ArticleListComponent,
    ArticleCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
