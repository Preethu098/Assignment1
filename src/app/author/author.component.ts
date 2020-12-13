import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { authors } from '../authors';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author;

  constructor(
    private route :  ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.author = authors[+params.get('authorId')];
    });
  }
}