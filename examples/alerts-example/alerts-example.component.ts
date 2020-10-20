import { Component } from '@angular/core';
import { Alert } from '@lab900/ui';

@Component({
  selector: 'lab900-alerts-example',
  template: `
    <lab900-alert [type]="Error">This is an error!</lab900-alert>
    <br />
    <lab900-alert [type]="Warn">This is a warning!</lab900-alert>
    <br />
    <lab900-alert [type]="Success">This is a success message!</lab900-alert>
    <br />
    <lab900-alert [type]="Info">This is an info message!</lab900-alert>
  `,
})
export class AlertsExampleComponent {
  public readonly Info = Alert.Info;
  public readonly Warn = Alert.Warn;
  public readonly Error = Alert.Error;
  public readonly Success = Alert.Success;
}
