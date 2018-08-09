import { throwError } from 'rxjs';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UnexpectedError } from '../../common/unexpected-error';

@Component({
  selector: 'postscomponents',
  templateUrl: './postscomponents.component.html',
  styleUrls: ['./postscomponents.component.css']
})
export class PostscomponentsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) { 
  }
  
  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe(
       newPost => {
         post['id'] = newPost.id;
         this.posts.splice(0, 0, post);
       }, 
       (error: AppError) => {
         if (error instanceof UnexpectedError) {
          // this.form.setErrors(error.originalError);
         }
         else {
          throw error;
         }
       });
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(
      updatedPost => {
        console.log(updatedPost);
      });
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.delete(345)
    .subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error: AppError) => {
        if (error instanceof NotFoundError) 
          alert('This post has already been deleted');
        else {
          throw error;
        }
      });
  }

}
