import { Component } from '@angular/core';
import { environment } from './environments/environment';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name }} </h1>`,
  templateUrl: "./app.component.html",
})
export class AppComponent  { 
  name = 'Angular';
  env =  environment;
 }
