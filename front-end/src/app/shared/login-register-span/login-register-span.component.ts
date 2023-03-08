import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-register-span',
  templateUrl: './login-register-span.component.html',
  styleUrls: ['./login-register-span.component.scss']
})
export class LoginRegisterSpanComponent {
  @Input() text1:string = "content";
  @Input() text2:string = "content";
  @Input() link:string = "content";
}
