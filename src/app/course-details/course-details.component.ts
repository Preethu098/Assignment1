import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { authors } from '../authors';
import { courses } from '../courses';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  authors= authors;
  course;

  constructor(
    private route :  ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.course = courses[+params.get('courseId')];
    });
  }
  addToCart(course) {
    this.cartService.addToCart(course);
    window.alert('Your course has been added to the cart!');
  }

  addToWishlist(course) {
    this.wishlistService.addToWishlist(course);
    window.alert('Your course has been added to the Wishlist!');
  }

  

}