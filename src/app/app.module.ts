import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './index-user/user-list/user-list.component';
import { UserCreateComponent } from './index-user/user-create/user-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { IndexUserComponent } from './index-user/index-user.component';
import { IndexArticlesComponent } from './index-articles/index-articles.component';
import { ArticleListComponent } from './index-articles/article-list/article-list.component';
import { ArticleCreateComponent } from './index-articles/article-create/article-create.component';
import { AngularFireModule } from '@angular/fire/compat'
import {environment} from "../environments/environment.prod";
import {AppRoutingModule} from "./app-routing.module";
import { ArticleDetailComponent } from './index-articles/article-detail/article-detail.component';
import { DetailUserComponent } from './index-user/detail-user/detail-user.component';
import { IndexCommentaryComponent } from './index-commentary/index-commentary.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    IndexUserComponent,
    IndexArticlesComponent,
    ArticleListComponent,
    ArticleCreateComponent,
    ArticleDetailComponent,
    DetailUserComponent,
    IndexCommentaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
