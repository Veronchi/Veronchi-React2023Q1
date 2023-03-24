import { ErrorTypes } from '@/utils/enums';
import { FileInput, InputData, RadioData } from '@/utils/interfaces';

export function validateTitle(inputData: InputData): string | undefined {
  if (!inputData.length) {
    return ErrorTypes.EMPTY_TITLE;
  } else if (inputData.length < 2) {
    return ErrorTypes.SHORT_TITLE;
  }
}

export function validateDesc(inputData: InputData): string | undefined {
  if (!inputData.length) {
    return ErrorTypes.EMPTY_DESC;
  } else if (inputData.length < 5) {
    return ErrorTypes.SHORT_DESC;
  }
}

export function validatePrice(inputData: InputData): string | undefined {
  if (!inputData.length) {
    return ErrorTypes.EMPTY_PRICE;
  } else if (+inputData < 0) {
    return ErrorTypes.NEGATIVE_PRICE;
  }
}

export function validateSelect(inputData: InputData): string | undefined {
  if (inputData === 'Select category') {
    return ErrorTypes.CHOOSE_SELECT;
  }
}

export function validateDate(inputData: InputData): string | undefined {
  if (!inputData.length) {
    return ErrorTypes.EMPTY_DATE;
  }
}

export function validateRadio({ men, women }: RadioData): string | undefined {
  if (!(men || women)) {
    return ErrorTypes.RADIO;
  }
}

export function validateFile(fileInput: FileInput): string | undefined {
  if (!fileInput[0]) {
    return ErrorTypes.EMPTY_FILE;
  } else if (fileInput[0].size > 5000000) {
    return ErrorTypes.FILE;
  }
}
