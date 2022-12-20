import {Component, EventEmitter, OnInit} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {DtoInputArticle} from "../../index-articles/dto/dtoInputArticle";
import {ArticlesService} from "../../index-articles/articles.service";
import {DtoInputCommentary} from "../../index-commentary/dto/DtoInputCommentary";
import {CommentaryService} from "../../index-commentary/commentary.service";
import {DtoCreateArticle} from "../../index-articles/dto/dto-create-article";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoCreateCommentary} from "../../index-commentary/dto/DtoCreateCommentary";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user: DtoInputUser | null = null;

  articles: DtoInputArticle[] = [];

  userConnected: DtoInputUser | null = null;

  commentaries: DtoInputCommentary[] = [];

  notes: number = 10;

  idProfil: number = 0;

  Commentary: DtoCreateCommentary | null = null;

  form: FormGroup = this.fb.group({
    note: this.fb.control("", Validators.required),
    message: this.fb.control("", Validators.required)

  });

  constructor(private _userService: UserService,
              private _articleService: ArticlesService,
              private _commentaryService: CommentaryService,
              private _route: ActivatedRoute,
              private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(args => {
      if (args.has("id")) {
        const id = Number(args.get("id"));
        this.idProfil = id;

        this.fetchUserById(id);
        this.fetchAllArticleByUserId(id);
        this.fetchCommentaryByIdUser(id);
      }
    });
    this.fetchUserConnected();
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

  private fetchUserConnected() {
    this._userService
      .fetchByIdToken()
      .subscribe(user => this.userConnected = user);
  }


  sendCommentary() {

    if (confirm("Etes-vous sur de vouloir ajouter ce commentaire ?")) {
      this.Commentary = {
        note: this.form.value.note,
        nom: this.userConnected?.pseudo,
        message: this.form.value.message,
        idUser: this.userConnected?.id
      }
      this._commentaryService
        .create(this.Commentary)
        .subscribe(commentary => {
          this.commentaries.push(commentary)
        });
    }
  }
}
