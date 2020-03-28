import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-star-war',
  template: `
    <p>
      star-war works!
    </p>
    <starwar-home></starwar-home>
  `,
  styles: []
})
export class StarWarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
