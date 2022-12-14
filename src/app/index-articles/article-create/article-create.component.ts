import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoCreateArticle} from "../dto/dto-create-article";
import {DtoInputCategory} from "../../index-category/dto/dto-input-category";
import {CategoryService} from "../../index-category/category.service";

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
    nomCat: this.fb.control("", Validators.required),
    description : this.fb.control("",Validators.required),
    combobox: this.fb.control("",Validators.required)
  });
  @Output()
  articleCreated  :EventEmitter<DtoCreateArticle> = new EventEmitter<DtoCreateArticle>();
  categories: DtoInputCategory[]=[];

  constructor(private fb : FormBuilder, private _categoryService : CategoryService) { }

  ngOnInit(): void {
    this.fetchAllCategorie();
  }


  sendArticle() {
    this.articleCreated.next({
      name: this.form.value.name,
      urlImage: this.form.value.urlImage,
      nomCat: this.form.value.combobox,
      description : this.form.value.description
    })
  }

  fetchAllCategorie() {
    this._categoryService.fetchAll()
      .subscribe(category => {
        this.categories = category,
          console.log(this.categories)
      });

  }
}
