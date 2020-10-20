import { Component } from '@angular/core';
import { TableCell, Paging, ActionButton } from '@lab900/ui';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'lab900-table-example',
  template: `<lab900-table
    [tableCells]="tableCells"
    [activeSort]="sort"
    (sort)="sortChange($event)"
    [data]="mockData"
    [paging]="paging"
    [tableActionsBack]="tableActions"
    [tableHeaderActions]="tableHeaderActions"
    [toggleColumns]="true"
    [selectableRows]="true"
    [selectedItems]="selectedItems"
  >
    <div *lab900TableHeaderContent>Header can have custom elements</div>
    <div *lab900TableEmpty>
      <div class="no-results">
        <p>No results template (can be anything)</p>
      </div>
    </div>
  </lab900-table>`,
})
export class TableExampleComponent {
  public sort: Sort = { active: 'id', direction: 'asc' };

  public tableHeaderActions: ActionButton[] = [
    {
      label: 'Kies een locatie',
      type: 'flat',
      // suffixIcon: 'keyboard_arrow_down',
    },
    {
      label: 'Exporteer lijst',
      type: 'stroked',
    },
  ];

  public tableActions: ActionButton[] = [
    {
      label: 'remove_red_eye',
      action: console.log,
      type: 'icon',
      tooltip: { value: 'View this' },
      disabled: (d) => d?.id === 1,
    },
    {
      label: 'Button',
      action: console.log,
      type: 'flat',
    },
    {
      label: 'more_horiz',
      action: console.log,
      type: 'icon',
      subActions: [
        {
          label: 'sub action',
          action: console.log,
          subActions: [
            {
              label: 'sub action',
              action: console.log,
            },
            {
              label: 'sub action 2',
              action: console.log,
            },
          ],
        },
        {
          label: 'sub action 2',
          action: console.log,
        },
      ],
    },
  ];

  public mockData: any[] = [
    {
      name: 'A name',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf',
      id: 1,
      nested: {
        test: 'xxx',
      },
    },
    {
      name: 'B name',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf',
      id: 2,
      nested: {},
    },
    {
      name: '',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf sdfdsfdsfdsfdsfdsf',
      id: 3,
    },
  ];

  public selectedItems = this.mockData[0];

  public paging: Paging = {
    pageIndex: 0,
    pageSize: 5,
    totalItems: this.mockData.length,
  };

  public tableCells: TableCell[] = [
    {
      key: 'name',
      label: 'GENERAL.TYPE',
      sortable: true,
      click: (d) => alert(d.name),
      cellClass: 'clickable-cell',
    },
    {
      key: 'nameLong',
      label: 'GENERAL.LOCATION',
      sortable: true,
    },
    {
      key: 'nested.test',
      label: 'GENERAL.GROUP_CODE',
      sortable: true,
    },
  ];

  public sortChange(sort: Sort): void {
    this.sort = sort;
    this.mockData.sort((a: any, b: any) => (a[sort.active] < b[sort.active] ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1));
    this.mockData = [...this.mockData];
  }
}
