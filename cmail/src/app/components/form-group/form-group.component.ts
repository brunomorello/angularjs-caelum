import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  @Input() idField = '';
  @Input() labelField = '';

  constructor() { }

  ngOnInit() {
  }

}
