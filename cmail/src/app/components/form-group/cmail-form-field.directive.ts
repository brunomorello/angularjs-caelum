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
    const formField:HTMLInputElement = this.element.nativeElement;

    formField.placeholder = " ";
    formField.classList.add("mdl-textfield__input");
    
    if(formField.name) {
      formField.id = formField.name;
    } else {
      throw new Error('Define a name attribute!');
    }

  }

}
