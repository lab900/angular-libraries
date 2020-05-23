import { Component, OnInit } from '@angular/core';
import { Alert } from '../../../../projects/ui/src/lib/alert/models/alert';

@Component({
  selector: 'lab900-ui-showcase',
  templateUrl: './ui-showcase.component.html',
  styleUrls: ['./ui-showcase.component.scss'],
})
export class UiShowcaseComponent implements OnInit {
  public readonly Info = Alert.Info;
  public readonly Warn = Alert.Warn;
  public readonly Error = Alert.Error;
  public readonly Success = Alert.Success;

  constructor() {}

  ngOnInit(): void {}

  log(message: string) {
    console.log(message);
  }
}
