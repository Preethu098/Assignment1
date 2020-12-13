import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
items;

  constructor(
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.items = this.wishlistService.getItems();
  }
}