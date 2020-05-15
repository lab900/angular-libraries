export enum EditType {
  TextArea = 'TextArea',
  Wysiwyg = 'Wysiwyg',
  Input = 'Input',
}

export const defaultValue = (editType: EditType): any => {
  switch (editType) {
    case EditType.Input:
    case EditType.TextArea:
    case EditType.Wysiwyg:
      return '';
  }
};
