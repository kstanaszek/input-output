import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Input() inputfromParent: string;

  constructor() { }

  ngOnInit() {
    console.log(this.inputfromParent)
  }

}
