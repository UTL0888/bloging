import { Component, OnInit } from '@angular/core';
import {BlogpostService } from '../blogpost.service';
import { Category  } from '../category'

@Component({
  selector: 'app-blogpost-categories',
  templateUrl: './blogpost-categories.component.html',
  styleUrls: ['./blogpost-categories.component.css']
})
export class BlogpostCategoriesComponent implements OnInit {

  categories: Category;
  error: {};

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.blogpostService.getCategories().subscribe(
      (data: Category) => this.categories = data
    );
  }

}
