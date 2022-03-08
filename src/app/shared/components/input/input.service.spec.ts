import { TestBed } from '@angular/core/testing';
import { LOGIN_SCHEMA } from 'schema/login.schema';

import { InputService } from './input.service';

describe('InputService', () => {
  let service: InputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate correct state from a schema', () => {
    let result = service.getValidationFuns([]);
    expect(result.length).toBe(0, 'Error in base case of getValidationFuns');
    const sampleValidations = LOGIN_SCHEMA.inputs[0].validations;
    result = service.getValidationFuns(sampleValidations);
    let expectedLen = 0;
    sampleValidations.forEach((el) => {
      el.inAction && expectedLen++;
    });
    expect(result.length).toBe(expectedLen, 'Error in getValidationFuns');
  });
});
