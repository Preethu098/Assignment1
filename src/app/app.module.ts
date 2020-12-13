import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AuthorComponent } from './author/author.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { WishlistService } from './wishlist.service';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CourseListComponent },
      { path: 'courses/:courseId', component: CourseDetailsComponent},
      {path: 'authors/:authorId', component: AuthorComponent},
      {path:'cart',component:CartComponent},
      {path:'wishlist',component:WishlistComponent}

    ]) 
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CourseListComponent,
    CourseDetailsComponent,
    AuthorComponent,
    CartComponent,
    WishlistComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, WishlistService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/