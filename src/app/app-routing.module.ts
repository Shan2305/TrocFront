import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticleDetailComponent} from "./index-articles/article-detail/article-detail.component";
import {ArticleListComponent} from "./index-articles/article-list/article-list.component";
import {IndexArticlesComponent} from "./index-articles/index-articles.component";
import * as path from "path";
import {DetailUserComponent} from "./index-user/detail-user/detail-user.component";


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
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
