import { Component, OnInit } from '@angular/core';
import { Tweet } from '../shared/models/tweet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tweets: Tweet[] = [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      authorHandle: 'BurhanF',
      authorName: 'Burhan Faquiri',
      aviSrc: '/assets/avi.jpeg',
      commentCount: 25,
      likeCount: 20,
      retweetCount: 25,
      verified: true,
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt',
      authorHandle: 'BurhanF',
      authorName: 'Burhan Faquiri',
      aviSrc: '/assets/avi.jpeg',
      commentCount: 25,
      likeCount: 20,
      retweetCount: 25,
      verified: true,
    },
    {
      id: '3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      authorHandle: 'BurhanF',
      authorName: 'Burhan Faquiri',
      aviSrc: '/assets/avi.jpeg',
      commentCount: 25,
      likeCount: 20,
      retweetCount: 25,
      verified: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
