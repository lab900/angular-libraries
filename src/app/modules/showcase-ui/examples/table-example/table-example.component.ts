import { Component } from '@angular/core';
import { ActionButton, Lab900Sort, Paging, TableCell } from '@lab900/ui';

@Component({
  selector: 'lab900-table-example',
  template: `<lab900-table
    [pageSizeConfig]="{ hidePageSize: true, pageSizeOptions: [5, 10] }"
    [tableCells]="tableCells"
    [sort]="sort"
    (sortChange)="sortChange($event)"
    [data]="mockData"
    [paging]="paging"
    [tableActionsBack]="tableActions"
    [tableHeaderActions]="tableHeaderActions"
    [toggleColumns]="false"
    [toggleAndMoveColumns]="true"
    filterIcon="settings"
    [selectableRows]="true"
    [selectedItems]="selectedItems"
    [onRowClick]="rowClick"
    [multiSort]="true"
    [rowClass]="getRowClass"
    (tableCellsFiltered)="filtered($event)"
  >
    <div *lab900TableTopContent>Custom top content</div>
    <div *lab900TableHeaderContent>Custom header</div>
    <div *lab900TableCustomCell="let data">
      <div *ngIf="data.cell.key === 'active'">
        <mat-checkbox color="primary" [checked]="data.element?.active"></mat-checkbox>
      </div>
    </div>
    <div *lab900TableEmpty>
      <div class="no-results">
        <p>No results template (can be anything)</p>
      </div>
    </div>
  </lab900-table>`,
})
export class TableExampleComponent {
  public sort: Lab900Sort[] = [{ id: 'id', direction: 'asc' }];

  public tableHeaderActions: ActionButton[] = [
    {
      label: 'Kies een locatie',
      type: 'flat',
      // suffixIcon: 'keyboard_arrow_down',
    },
    {
      label: 'Button',
      type: 'stroked',
    },
    {
      label: 'keyboard_arrow_down',
      type: 'icon',
    },
    {
      label: 'Exporteer lijst',
      type: 'stroked',
      prefixIcon: 'keyboard_arrow_down',
      subActions: [
        {
          label: 'Word',
          type: 'stroked',
        },
        {
          label: 'PDF',
          type: 'stroked',
        },
      ],
    },
    {
      label: 'Exporteer lijst',
      type: 'toggle',
      prefixIcon: 'keyboard_arrow_down',
      subActions: [
        {
          label: 'Word',
          type: 'stroked',
          selected: () => false,
        },
        {
          label: 'PDF',
          type: 'stroked',
          selected: true,
        },
      ],
    },
  ];

  public tableActions: ActionButton[] = [
    {
      label: 'edit',
      type: 'icon',
      tooltip: { value: 'View this' },
      disabled: (d) => d?.id === 1,
    },
    {
      label: 'delete',
      type: 'icon',
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
      email: 'mail@test.com',
      city: 'New York City',
    },
    {
      name: 'B name',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf',
      id: 2,
      active: true,
      nested: {},
    },
    {
      name: '',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf sdfdsfdsfdsfdsfdsf',
      id: 3,
    },
  ];

  public selectedItems = [this.mockData[0]];

  public paging: Paging = {
    pageIndex: 0,
    pageSize: 5,
    totalItems: this.mockData.length,
  };

  public tableCells: TableCell[] = [
    {
      key: 'name',
      label: 'Name',
      cellHeaderIcon: 'accessibility',
      cellHeaderClass: 'center-cell',
      sortable: true,
      cellClass: 'clickable-cell',
      cellTooltip: (data) => data.name,
      columnOrder: 0,
    },
    {
      key: 'nameLong',
      label: 'Long name',
      sortable: true,
      cellClass: 'clickable-cell',
      cellTooltip: (data) => data.nameLong,
      columnOrder: 1,
    },
    {
      key: 'id',
      label: 'ID',
      sortable: true,
      cellClass: 'clickable-cell',
      width: '*',
      columnOrder: 3,
    },
    {
      key: 'active',
      label: 'Active',
      customCellContent: true,
      cellClass: 'center-cell',
      columnOrder: 2,
    },
    {
      key: 'email',
      label: 'Email',
      columnOrder: 4,
      hide: true,
    },
    {
      key: 'city',
      label: 'City',
      columnOrder: 5,
      hide: true,
    },
  ];

  public sortChange(sort: Lab900Sort[]): void {
    sort.forEach((s) => {
      this.mockData.sort((a: any, b: any) => (a[s.id] < b[s.id] ? -1 : 1) * (s.direction === 'asc' ? 1 : -1));
      this.mockData = [...this.mockData];
    });
  }

  public rowClick(event, row, i): void {
    console.log(event, row, i);
  }

  public filtered(e): void {
    console.log(e);
  }

  public getRowClass(row: any): string {
    return row.active ? 'bg-green' : '';
  }
}
