import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './index-user/user-list/user-list.component';
import { UserCreateComponent } from './index-user/user-create/user-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import { IndexCategoryComponent } from './index-category/index-category.component';
import { AuthentificationFormComponent } from './index-authentification/authentification-form/authentification-form.component';
import { UserProfileComponent } from './index-user/user-profile/user-profile.component';
import {reauthenticateWithCredential} from "@angular/fire/auth";
import {AuthentificationService} from "./index-authentification/authentification.service";
import { UserUpdateComponent } from './index-user/user-update/user-update.component';
import { IndexBarreNavComponent } from './index-barre-nav/index-barre-nav.component';
import { ArticleUpdateComponent } from './index-articles/article-update/article-update.component';
import { IndexTransactionsComponent } from './index-transactions/index-transactions.component';
import { TransactionsListComponent } from './index-transactions/transactions-list/transactions-list.component';
import { TransactionsDetailComponent } from './index-transactions/transactions-detail/transactions-detail.component';
import { IndexHistoricTransactionsComponent } from './index-historic-transactions/index-historic-transactions.component';
import { DetailHistoricTransactionsComponent } from './index-historic-transactions/detail-historic-transactions/detail-historic-transactions.component';



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
    IndexCommentaryComponent,
    IndexCategoryComponent,
    AuthentificationFormComponent,
    UserProfileComponent,
    UserUpdateComponent,
    IndexBarreNavComponent,
    ArticleUpdateComponent,
    IndexTransactionsComponent,
    TransactionsListComponent,
    TransactionsDetailComponent,
    IndexHistoricTransactionsComponent,
    DetailHistoricTransactionsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthentificationService, multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
