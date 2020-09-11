import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogAdminSchemaData } from '../../models/dialogAdminSchemaData';
import { Form } from '@lab900/forms';
import { SchemaConverter } from '../../models/schema';

@Component({
  selector: 'lab900-translatable-form-dialog',
  templateUrl: './translatable-form-dialog.component.html',
  styleUrls: ['./translatable-form-dialog.component.scss'],
})
export class TranslatableFormDialogComponent<T> implements OnInit {
  public dialogAdminSchemaData: DialogAdminSchemaData<T>;
  public formData: T;
  public loading = false;
  public error: string;
  public formSchema: Form;
  public currentLanguage: string;
  private returnObject: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogAdminSchemaData<T>,
    private dialogRef: MatDialogRef<TranslatableFormDialogComponent<T>>,
  ) {
    this.dialogAdminSchemaData = data;
    this.formSchema = SchemaConverter.toForm(data.schema, data.create);
    this.formData = !!this.dialogAdminSchemaData.data ? this.dialogAdminSchemaData.data : ({} as T);
  }

  ngOnInit(): void {
    this.currentLanguage = Array.from(this.dialogAdminSchemaData.schema.languages.keys())[0];
  }

  submit(item: T) {
    this.loading = true;
    this.error = null;
    this.addToReturnObject(item);
    this.dialogAdminSchemaData
      .submit({ ...item, ...this.returnObject })
      .catch((error) => (this.error = error))
      .then((result) => (result ? this.dialogRef.close() : (this.error = 'Oops. An error occured.')))
      .finally(() => (this.loading = false));
  }

  onLanguageChange(language: string, item: T) {
    this.loading = true;
    this.addToReturnObject(item);
    this.currentLanguage = language;

    if (!!this.returnObject[language]) {
      const translatables = {};
      this.data.schema.fields
        .filter((field) => field.translatable)
        .forEach((field) => {
          translatables[field.attribute] = this.returnObject[language][field.attribute];
        });
      this.formData = { ...item, ...translatables }; // Necessary to re-render the form
      console.log(this.formData);
      this.loading = false;
    } else {
      this.dialogAdminSchemaData
        .get(this.formData.id, language)
        .catch((error) => (this.error = error))
        .then((value) => {
          const translatables = {};
          this.data.schema.fields
            .filter((field) => field.translatable)
            .forEach((field) => {
              translatables[field.attribute] = value[field.attribute];
            });
          this.formData = { ...item, ...translatables }; // Necessary to re-render the form
        })
        .finally(() => {
          this.loading = false;
          console.log(this.formData);
        });
    }
  }

  private addToReturnObject(item: T): void {
    if (!this.returnObject[this.currentLanguage]) {
      this.returnObject[this.currentLanguage] = {};
    }
    this.data.schema.fields
      .filter((field) => field.translatable)
      .forEach((field) => {
        this.returnObject[this.currentLanguage][field.attribute] = item[field.attribute];
      });
  }

  clearLanguage() {
    const translatables = {} as T;
    this.data.schema.fields
      .filter((field) => field.translatable)
      .forEach((field) => {
        translatables[field.attribute] = null;
      });
    this.addToReturnObject(translatables);
    this.formData = { ...this.formData, ...translatables };
  }
}
