import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  userId = '';

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap);

    this.userId = this.activeRoute.snapshot.paramMap.get('id');
    
  }

}
