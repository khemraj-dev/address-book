import { TestBed, inject } from '@angular/core/testing';

import { AddressBookDataService } from './address-book-data.service';

describe('AddressBookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressBookDataService]
    });
  });

  it('should be created', inject([AddressBookDataService], (service: AddressBookDataService) => {
    expect(service).toBeTruthy();
  }));
});
