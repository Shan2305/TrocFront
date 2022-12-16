import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticleDetailComponent} from "./index-articles/article-detail/article-detail.component";
import {ArticleListComponent} from "./index-articles/article-list/article-list.component";
import {IndexArticlesComponent} from "./index-articles/index-articles.component";
import * as path from "path";
import {DetailUserComponent} from "./index-user/detail-user/detail-user.component";
import {UserListComponent} from "./index-user/user-list/user-list.component";
import {UserProfileComponent} from "./index-user/user-profile/user-profile.component";
import {UserUpdateComponent} from "./index-user/user-update/user-update.component";
import {
  AuthentificationFormComponent
} from "./index-authentification/authentification-form/authentification-form.component";
import {ArticleUpdateComponent} from "./index-articles/article-update/article-update.component";


const routes: Routes = [
  {
    path:'', redirectTo:'accueil', pathMatch: 'full'
  },
  {
    path: 'accueil', component:IndexArticlesComponent,
  },

  {
    path: 'detail/:id', component: ArticleDetailComponent
  },

  {
    path: 'detailUser/:id', component: DetailUserComponent
  },
  {
    path: 'listUsers', component: UserListComponent
  },
  {
    path: 'profile', component: UserProfileComponent
  },
  {
    path: 'profileUpdate', component: UserUpdateComponent
  },
  {
    path: 'articleUpdate/:id', component: ArticleUpdateComponent
  },
  {
    path: 'Connexion', component: AuthentificationFormComponent
  },


]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
