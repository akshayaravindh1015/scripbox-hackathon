import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

import { Validation } from './input.props.model';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  constructor() {}

  // (control: AbstractControl): {[s: string]: boolean}
  getValidationFuns(validatoins: Validation[]): ValidatorFn[] {
    let result: ValidatorFn[] = [];
    for (const validation of validatoins) {
      if (validation.inAction) {
        const fun: ValidatorFn = (control) => {
          if (!validation.validationFn(control.value)) {
            let key = validation.name;
            let errorObj: any = {};
            errorObj[key] = true;
            return errorObj;
          }
          return null;
        };
        result.push(fun);
      }
    }
    return result;
  }
}
