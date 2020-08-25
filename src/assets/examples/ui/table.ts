import { Component } from '@angular/core';
import { TableCell } from '@lab900/ui';

@Component({
  selector: 'lab900-table-example',
  template: ` <lab900-table [tableCells]="tableCells" [data]="data">
    <div *lab900TableEmpty>
      <div class="no-results">
        <p>No results template (can be anything)</p>
      </div>
    </div>
  </lab900-table>`,
})
export class TableExampleComponent {
  public data: any[] = [
    {
      name: 'Example name',
      birthday: new Date(),
    },
    {
      name: 'Example name 2',
      birthday: new Date(),
    },
  ];

  public tableCells: TableCell[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'birthday',
      label: 'Birthday',
    },
  ];
}
