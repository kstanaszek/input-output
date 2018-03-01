import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output() putRingOnIt: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  emitOutput(): void {
    this.putRingOnIt.emit("hello world from output")
  }

}
