import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index-historic-articles',
  templateUrl: './index-historic-articles.component.html',
  styleUrls: ['./index-historic-articles.component.css']
})
export class IndexHistoricArticlesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
