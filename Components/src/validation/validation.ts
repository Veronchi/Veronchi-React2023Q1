import { ErrorTypes } from '@/utils/enums';
import { SelectData } from '@/utils/interfaces';

export function validateSelect(selectData: SelectData): string | undefined {
  if (selectData === 'Select category') {
    return ErrorTypes.CHOOSE_SELECT;
  }
}
