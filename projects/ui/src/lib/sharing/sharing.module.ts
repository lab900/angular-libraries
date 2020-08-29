import { NgModule } from '@angular/core';
import { Lab900SharingComponent } from './components/sharing/sharing.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [Lab900SharingComponent],
  exports: [Lab900SharingComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule],
})
export class Lab900SharingModule {}
