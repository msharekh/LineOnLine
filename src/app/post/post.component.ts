import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];
  constructor(postsService: PostsService) {
    postsService.getPosts().subscribe(res => {
      console.log(res);
      this.posts=res;
    }, err => {

    });
  }

  ngOnInit() {
  }

}
