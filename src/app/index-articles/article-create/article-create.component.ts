import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoCreateArticle} from "../dto/dto-create-article";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  private Validators: any;

  form : FormGroup = this.fb.group({
    name: this.fb.control("", Validators.required),
    urlImage: this.fb.control("", Validators.required),
    publicationDate: this.fb.control("", Validators.required),
    nomCat: this.fb.control("", Validators.required)
  });
  @Output()
  articleCreated  :EventEmitter<DtoCreateArticle> = new EventEmitter<DtoCreateArticle>();

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }


  sendArticle() {
    this.articleCreated.next({
      name: this.form.value.name,
      urlImage: this.form.value.urlImage,
      publicationDate: this.form.value.publicationDate,
      nomCat: this.form.value.nomCat
    })
  }
}
