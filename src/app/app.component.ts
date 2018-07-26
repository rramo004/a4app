import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // post = {
  //   title: "Title",
  //   isFavorite: true
  // }

  // onFavoriteChanged(eventArgs: {newValue: boolean}) {
  //   console.log("Favorite Changed: " + eventArgs);
  // }
  tweet = {
    body: '...',
    likesCount: 10,
    isActive: true,
    isLiked: '<3'
  }
}
