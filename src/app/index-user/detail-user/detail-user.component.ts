import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {DtoInputArticle} from "../../index-articles/dto/dtoInputArticle";
import {ArticlesService} from "../../index-articles/articles.service";
import {DtoInputCommentary} from "../../index-commentary/dto/DtoInputCommentary";
import {CommentaryService} from "../../index-commentary/commentary.service";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user: DtoInputUser | null = null;

  articles: DtoInputArticle[] = [];

  commentaries: DtoInputCommentary[] = [];

  constructor(private _userService: UserService,
              private _articleService: ArticlesService,
              private _commentaryService: CommentaryService,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(args => {
      if (args.has("id")) {
        const id = Number(args.get("id"));

        this.fetchUserById(id);
        this.fetchAllArticleByUserId(id);
        this.fetchCommentaryByIdUser(id);
      }
    });
  }

  private fetchUserById(id: number) {
    this._userService
      .fetchById(id)
      .subscribe(user => {
        this.user = user,
          console.log(this.user)
      });
  }

  private fetchAllArticleByUserId(id: number) {
    this._articleService
      .fetchAllArticleByUserId(id)
      .subscribe(article => {
        this.articles = article,
          console.log(this.articles)
      });
  }

  private fetchCommentaryByIdUser(id: number) {
    this._commentaryService
      .fetchById(id)
      .subscribe(commentarie => {
        this.commentaries = commentarie,
          console.log(this.commentaries)
      })
  }


}
