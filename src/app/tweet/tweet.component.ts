import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../shared/models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit {
  @Input() tweet!: Tweet;
  constructor() {}

  ngOnInit(): void {}
}
