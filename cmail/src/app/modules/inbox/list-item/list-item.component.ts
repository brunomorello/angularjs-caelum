import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [
    './list-item.component.css'
  ]
})
export class ListItemComponent implements OnInit {

  @Input() emailFrom = '';
  @Input() emailSubject = '';
  @Input() emailContent = '';
  @Input() emailCreationDate: Date;
  //todo change the vars above to Email Object
  @Output() eventEmailRemove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeEmail(click: Event) {
    
    console.log('removeEmail button clicked');
    
    if(confirm('Are you sure?')) {
      this.eventEmailRemove.emit({ status: 'removing' })
    }
  }

}
