import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: ['<p></p>'],
})
export class ChildComponent {
  @Output() dataGetEvent = new EventEmitter();
  @Input() dataReceiveByParent: string;

  clickTrigger() {
    this.dataGetEvent.emit('Hello Guyssss !!!!!');
  }
}
