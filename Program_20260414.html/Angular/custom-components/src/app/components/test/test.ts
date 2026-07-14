import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  template: ` <p>test works!</p> `,
  styles: `p{
  color: blue
  }`,
})
export class Test {}

// creation of a SFC component
// ng g c <component -t -s
// ng generate component <component --inline-template --inline-style