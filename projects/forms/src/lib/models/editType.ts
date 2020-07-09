export enum EditType {
  Checkbox = 'Checkbox',
  TextArea = 'TextArea',
  Date = 'Date',
  Wysiwyg = 'Wysiwyg',
  Image = 'Image',
  Input = 'Input',
  Number = 'Number',
  File = 'File',
  Select = 'Select',
}

export const defaultValue = (editType: EditType): any => {
  switch (editType) {
    case EditType.Input:
    case EditType.TextArea:
    case EditType.Wysiwyg:
      return '';
  }
};
