import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  likebtn: any;
  smilebtn: any;

  likeChange(likebtn: boolean) {
    this.likebtn = true
    this.smilebtn = false
    if (likebtn == true) {
      this.likebtn = false
    }
  }
  getCommentVal(comment: any) {
  }


  smileChange(smilebtn: boolean) {
    this.likebtn = false
    this.smilebtn = true
    if (smilebtn == true) {
      this.smilebtn = false
    }
  }
  commentSts:boolean=false
  Comment: any = []

  commentArea: any;
  username:string= "";
  commentDay:any;
  commentYear:any;
  commentMounth:any;

  getComment(comment: any) {
    this.commentSts=true
    this.username ="mehmetsenkalpp"
    this.Comment.push(comment.value,)
    this.commentArea = this.Comment[0]
    let date = new Date;
    this.commentDay = date.getUTCDay()
    this.commentMounth = date.getMonth()
 this.commentYear = date.getFullYear()
  }
}
