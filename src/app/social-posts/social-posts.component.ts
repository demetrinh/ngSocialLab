import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Gym',
      thought: "I miss it but it's dirty",
    },
    {
      title: 'Plan',
      thought: "I'll go running instead",
    },
    {
      title: 'Goal',
      thought: "I'm going to run 2 miles a day",
    },
  ];

  showForm: boolean = false;

  constructor() {}

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
