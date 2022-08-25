import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Output() likeHateButtonCLicked: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();
  @Input() score: number = 0;
  likehate: LikeHate = LikeHate.HATE;
  constructor() { }

  ngOnInit(): void {

  }

  likeBtnClicked() {
    this.likeHateButtonCLicked.emit(LikeHate.LIKE);
  }
  dislikeBtnClicked() {
    this.likeHateButtonCLicked.emit(LikeHate.HATE);
  }

}
