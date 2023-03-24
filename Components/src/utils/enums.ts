export enum Paths {
  DEFAULT = '/',
  HOME = 'home',
  ABOUT = 'about-us',
  FORM = 'form',
  ERROR = '*',
}

export enum ErrorTypes {
  EMPTY_TITLE = 'empty:title',
  SHORT_TITLE = 'short:title',
  SHORT_DESC = 'short:desc',
  EMPTY_DESC = 'empty:desc',
  EMPTY_PRICE = 'empty:price',
  NEGATIVE_PRICE = 'negative:price',
  CHOOSE_SELECT = 'select',
  EMPTY_DATE = 'empty:date',
  RADIO = 'radio',
  FILE = 'file',
  EMPTY_FILE = 'empty:file',
}

export enum ErrorMessage {
  EMPTY_TITLE = 'Enter brand name',
  SHORT_TITLE = 'This field cannot be less than 2 characters',
  EMPTY_DESC = 'Enter product description',
  SHORT_DESC = 'This field cannot be less than 5 characters',
  EMPTY_PRICE = 'Enter product price',
  NEGATIVE_PRICE = 'price must be greater than zero',
  SELECT = 'Select a category',
  EMPTY_DATE = 'This field cannot be empty',
  RADIO = 'Choose one option',
  FILE = 'file size cannot be more than 5 MB',
  EMPTY_FILE = 'No file chosen',
}
