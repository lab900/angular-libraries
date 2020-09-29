import { Component } from '@angular/core';
import { TableCell } from 'projects/ui/src/lib/table/models/table-cell.model';
import { TableHeaderAction, TableRowAction } from 'projects/ui/src/lib/table/models/table-action.model';
import { Sort } from '@angular/material/sort';
import { Paging } from '../../../../../../projects/ui/src/lib/common/models/paging.model';

@Component({
  selector: 'lab900-table-example',
  template: `<lab900-table
    [tableCells]="tableCells"
    [activeSort]="sort"
    (sort)="sortChange($event)"
    [data]="mockData"
    [paging]="paging"
    [tableActions]="tableActions"
    [tableHeaderActions]="tableHeaderActions"
    [toggleColumns]="true"
    [selectableRows]="true"
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

  public tableHeaderActions: TableHeaderAction[] = [
    {
      label: 'Kies een locatie',
      type: 'btn',
      suffixIcon: 'keyboard_arrow_down',
    },
    {
      label: 'Exporteer lijst',
      type: 'btn-secondary',
    },
  ];

  public tableActions: TableRowAction[] = [
    {
      label: 'remove_red_eye',
      action: console.log,
      type: 'icon-btn',
      tooltip: { value: 'View this' },
      disabled: (d) => d?.id === 1,
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
      nested: {
        test: 'xxx',
      },
    },
    {
      name: 'B name',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf',
      id: 2,
      nested: {
        test: 'bbb',
      },
    },
    {
      name: 'Example name 2',
      nameLong: 'A name sdfdsfdsfdsfdsfdsf sdfdsfdsfdsfdsfdsf',
      id: 3,
    },
  ];

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
      cellFormatter: (d) => 'test: ' + d.name,
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
    {
      key: 'calls',
      label: 'GENERAL.NUMBER_OF_CALL',
      sortable: true,
    },
    {
      key: 'linkedDossier.firstName',
      label: 'MISSING_PERSONS.FIRST_NAME',
      cellClass: 'bold-cell',
      sortable: true,
    },
    {
      key: 'linkedDossier.name',
      label: 'MISSING_PERSONS.LAST_NAME',
      cellClass: 'bold-cell',
      sortable: true,
    },
    {
      key: 'linkedDossier.dateOfBirth',
      label: 'MISSING_PERSONS.BIRTHDAY',
      sortable: true,
    },
    {
      key: 'linkedDossier.relationship',
      label: 'MISSING_PERSONS.RELATIONSHIP',
      sortable: true,
    },
    {
      key: 'linkedDossier.found',
      label: 'MISSING_PERSONS.STATUS',
      sortable: true,
    },
    {
      key: 'linkedDossier.notified',
      label: 'RELATED_PERSON.NOTIFIED',
      sortable: true,
    },
  ];

  public sortChange(sort: Sort): void {
    this.sort = sort;
    this.mockData.sort((a: any, b: any) => (a[sort.active] < b[sort.active] ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1));
    this.mockData = [...this.mockData];
  }
}
