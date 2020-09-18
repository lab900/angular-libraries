import { Component } from '@angular/core';
import { TableCell } from 'projects/ui/src/lib/table/models/table-cell.model';
import { TableAction } from 'projects/ui/src/lib/table/models/table-action.model';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'lab900-table-example',
  template: ` <lab900-table
    [tableCells]="tableCells"
    [activeSort]="sort"
    (sort)="sortChange($event)"
    [data]="mockData"
    [tableActions]="tableActions"
  >
    <div *lab900TableEmpty>
      <div class="no-results">
        <p>No results template (can be anything)</p>
      </div>
    </div>
  </lab900-table>`,
})
export class TableExampleComponent {
  public sort: Sort = { active: 'id', direction: 'asc' };
  public tableActions: TableAction[] = [
    {
      label: 'remove_red_eye',
      action: console.log,
      type: 'icon-btn',
      tooltip: { value: 'View this' },
    },
    {
      label: 'Button',
      action: console.log,
      type: 'btn',
    },
    {
      label: 'more_horiz',
      action: console.log,
      type: 'icon-btn',
      subActions: [
        {
          label: 'sub action',
          action: console.log,
          type: 'btn',
        },
        {
          label: 'sub action 2',
          action: console.log,
          type: 'btn',
        },
      ],
    },
  ];

  public mockData: any[] = [
    {
      name: 'A name',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf',
      id: 1,
    },
    {
      name: 'B name',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf',
      id: 2,
    },
    {
      name: 'Example name 2',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf sdfdsfdsfdsfdsfdsf',
      id: 3,
    },
  ];

  public tableCells: TableCell[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      sticky: true,
    },
    {
      key: 'id',
      label: 'Id',
      sortable: true,
    },
    {
      key: 'nameLong',
      label: 'Name long',
      sortable: true,
    },
    {
      key: 'nameLong2',
      label: 'Name long',
      cellFormatter: () => 'trest',
    },
    {
      key: 'namesdfdsfdsLong2',
      label: 'Name long',
      cellFormatter: () => 'trest',
      width: '200px',
    },
  ];

  public sortChange(sort: Sort): void {
    this.sort = sort;
    this.mockData.sort((a: any, b: any) => (a[sort.active] < b[sort.active] ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1));
    this.mockData = [...this.mockData];
  }
}
