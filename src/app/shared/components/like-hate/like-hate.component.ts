import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Output() likeHateButtonCLicked: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();
  @Input() hateDisable:boolean = false;
  @Input() likeDisable:boolean = false;

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
