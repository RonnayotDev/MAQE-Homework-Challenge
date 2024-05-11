import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { authors, posts } from '../../model/model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  authors: authors[] = [];
  posts: posts[] = [];
  currentDate = new Date();

  constructor(private userService: UserServiceService) {

  }

  ngOnInit(): void {
    this.loadAuthor()
    this.loadPosts()
  }

  loadAuthor() {
    this.userService.getAuthors().subscribe({
      next: (res: any) => {
        this.authors = res;
      },
      error: (error) => {
        console.log('Error Fetching', error)
      }
    })
  }
  loadPosts() {
    this.userService.getPosts().subscribe({
      next: (res: any) => {
        this.posts = res;
      },
      error: (error) => {
        console.log("Fetching Posts Error", error)
      }
    })
  }
}
