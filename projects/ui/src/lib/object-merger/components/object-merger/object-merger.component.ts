import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lab900-object-merger',
  templateUrl: './object-merger.component.html',
  styleUrls: ['./object-merger.component.scss'],
})
export class Lab900ObjectMergerComponent implements OnInit {
  @Input()
  private objectsToMerge: { primary: object; secondary: object };

  public ngOnInit(): void {
    console.log(this.objectsToMerge);
  }
}
