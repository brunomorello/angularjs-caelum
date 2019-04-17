import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [
    './list-item.component.css'
  ]
})
export class ListItemComponent implements OnInit {

  @Input() emailTo = '';
  @Input() emailSubject = '';
  @Input() emailContent = '';
  @Input() emailCreationDate = '';

  constructor() { }

  ngOnInit() {
  }

}
