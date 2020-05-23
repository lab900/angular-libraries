import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab900-ui-showcase',
  templateUrl: './ui-showcase.component.html',
  styleUrls: ['./ui-showcase.component.scss'],
})
export class UiShowcaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  log(message: string) {
    console.log(message);
  }
}
