import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  @Input() idField = '';
  @Input() labelField = '';
  @Input() elementControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
