import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myvar: string = "I am coming from parent."
  message: string;
  title = 'app';
  ringWasPlaced(message: string){
    this.message = message;
  }
}
