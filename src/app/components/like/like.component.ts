import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Input('isLiked') isLiked: string;

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isLiked = (this.isActive) ? '</3' : '<3';
    this.isActive = !this.isActive;
    
  }
}
