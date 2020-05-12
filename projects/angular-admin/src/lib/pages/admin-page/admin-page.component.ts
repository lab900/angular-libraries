import { Component, Input, OnInit } from '@angular/core';
import { Schema } from '../../models/schema';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'lab900-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public data:any[];
  @Input() schema: Schema;

  constructor() { }

  ngOnInit(): void {
    this.schema.crudService.getList(1,20).then(value => this.data = value); // error
  }

  onPageEvent(pageEvent: PageEvent) {
    console.log('Loading page');
    console.log(pageEvent);
  }
  onEdit(item:any) {
    console.log('show dialog to edit');
    console.log(item);
  }

  onDelete(item:any) {
    console.log('show dialog to delete');
    console.log(item);
  }


}
