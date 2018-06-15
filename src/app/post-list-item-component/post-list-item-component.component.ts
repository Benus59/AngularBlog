import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent  {

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number;
  @Input() created_at : Date;

  onVoteUp()
  {
this.loveIts++;
  }
  onVoteDown()
  {
this.loveIts--;
  }
}
