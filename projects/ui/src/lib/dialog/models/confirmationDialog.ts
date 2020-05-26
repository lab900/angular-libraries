import { AlertDialog } from './alertDialog';

export interface ConfirmationDialog extends AlertDialog {
  cancelButtonText?: string;
}
