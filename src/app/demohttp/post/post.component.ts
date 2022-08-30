import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'tc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postTab !: Post[];
  /**
   * on recupere l injection de postService, l unique instance
   * @param postsrv
   */
  constructor(private postsrv: PostService) {

  }

  ngOnInit(): void {
    this.postsrv.findAll().subscribe({
      next: data => this.postTab = data,
      error: error => console.log(error),
      complete: () => console.log("filnally")

    });
  }
  add() {

    this.postsrv.add(

      {

        body:"corpus",

        id:0,

        title:"essai 01",

        userId:1

      }

      ).subscribe(

        {

          next : data => this.postTab.push(data),

          error : error => console.log(error),

          complete : () => console.log("finally")



        }

      )

      ;

  }
}
