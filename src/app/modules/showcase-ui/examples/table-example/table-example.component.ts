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
      sortable: true,
      cellClass: 'clickable-cell',
    },
    {
      key: 'id',
      label: 'ID',
      sortable: true,
      cellClass: 'clickable-cell',
      width: '*',
    },
    {
      key: 'active',
      label: 'Active',
      customCellContent: true,
      cellClass: 'center-cell',
    },
  ];

  public sortChange(sort: Sort): void {
    this.sort = sort;
    this.mockData.sort((a: any, b: any) => (a[sort.active] < b[sort.active] ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1));
    this.mockData = [...this.mockData];
  }
}
