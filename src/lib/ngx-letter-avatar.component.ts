import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'letter-avatar',
  template:'<span [innerHTML]=" person | letterAvatarPipe "></span>',
  styleUrls: ['./ngx-letter-avatar.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxLetterAvatarComponent implements OnInit {
  @Input() person;

  constructor() { }

  ngOnInit(): void {
  }

}
