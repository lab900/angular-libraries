import { Component } from '@angular/core';

@Component({
  selector: 'lab900-button-example',
  styles: ['p {margin: 10px 0}'],
  template: `
    <p>Flat button</p>
    <lab900-button color="primary" type="flat" label="hello world" suffixIcon="remove_red_eye"></lab900-button>
    <p>Flat button</p>
    <lab900-button color="primary" type="stroked" label="hello world" prefixIcon="edit"></lab900-button>
    <p>Raised button</p>
    <lab900-button color="accent" type="raised" label="hello world"></lab900-button>
    <p>Icon button</p>
    <lab900-button type="icon" label="delete"></lab900-button>
    <p>Fab icon button</p>
    <lab900-button type="fab" label="delete"></lab900-button>
    <p>Fab-mini icon button</p>
    <lab900-button type="mini-fab" label="delete"></lab900-button>
  `,
})
export class ButtonExampleComponent {}
