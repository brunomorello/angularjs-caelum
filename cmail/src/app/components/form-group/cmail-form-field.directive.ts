import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class CmailFormFieldDirective {

  // DI - Dependency Inject * Bring Classes or Types that Angular knows how to create
  //element.nativeElement instantiate the DOM Attributes to be handled
  //     console.log(element.nativeElement); 
  constructor(private element: ElementRef) { }

  ngOnInit() {

  }

  //  id="user-full-name" placeholder=" " class="mdl-textfield__input"

}
