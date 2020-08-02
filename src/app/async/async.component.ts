import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  template: `
    <p>
      async works!
    </p>
  `,
  styles: [
  ]
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
