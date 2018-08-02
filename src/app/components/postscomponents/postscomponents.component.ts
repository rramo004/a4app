import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

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
    this.service.getPost()
    .subscribe(
      response => {
        this.posts = response.json();
      }, 
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(
       response => {
         post['id'] = response.json().id;
         this.posts.splice(0, 0, post);
         console.log(response.json());
       }, 
       (error: Response) => {
         if (error.status === 400) {
          // this.form.setError(error.json());
         }
         else {
          alert('An unexpected error occurred.');
          console.log(error);
         }
       });
  }

  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(
      reponse => {
        console.log(reponse.json());
      }, 
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe(
      reponse => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error: Response) => {
        if (error.status === 404) 
          alert('This post has already been deleted');
        else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }

}
