import { NgModule } from '@angular/core';
import { NgxLetterAvatarComponent } from './ngx-letter-avatar.component';
import { LetterAvatarPipe } from './ngx-letter-avatar.pipe';



@NgModule({
  declarations: [
      NgxLetterAvatarComponent,
      LetterAvatarPipe
    ],
  imports: [],
  exports: [
      NgxLetterAvatarComponent,
      LetterAvatarPipe
    ]

})
export class NgxLetterAvatarModule { }
