import { TestBed, fakeAsync, inject, flushMicrotasks } from '@angular/core/testing';

import { PreferencesAsyncService } from './preferences-async.service';
import { BrowserStorageAsyncService } from './browser-storage.service';


// mock the asynchronous service response
class BrowserStorageAsyncMock {
  getItem = (property: string) => {
    return Promise.resolve({key: 'testProp', value: 'testValue'});
  }
  setItem = (property: string, value: string | object) => {
    return Promise.resolve(true);
  }
}

describe('PreferencesAsyncService', () => {
  let service: PreferencesAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PreferencesAsyncService, {
          provide: BrowserStorageAsyncService, useClass: BrowserStorageAsyncMock
        }
      ]
    });
    service = TestBed.inject(PreferencesAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a value', fakeAsync(inject([PreferencesAsyncService, BrowserStorageAsyncService],
    (service: PreferencesAsyncService, browserStorage: BrowserStorageAsyncMock) => {
        spyOn(browserStorage, 'getItem').and.callThrough();

        let results, error;

        // invoke the promise and assigns the results
        service.getPropertyAsync('testProp')
            .then(val => results = val)
            .catch(err => error = err);

        // process the promise microtasks
        flushMicrotasks();

        expect(results.key).toEqual('testProp');
        expect(results.value).toEqual('testValue');
        expect(browserStorage.getItem).toHaveBeenCalledWith('testProp');

        // ensure the error value wasn't assigned
        expect(error).toBeUndefined();
    }))
  );

  it('should throw an error if the key is missing', fakeAsync(inject([PreferencesAsyncService],
    (service: PreferencesAsyncService) => {

        let result, error;

        // call getPropertyAsync with an invalid value
        service.getPropertyAsync('')
            .then(value => result = value) // use the BrowserStorageAsyncMock default return value
            .catch((err) => error = err); // catch the expected error and assigns it locally

        flushMicrotasks();

        // we shouldn't get a preference value back
        expect(result).toBeUndefined();

        // we should get an error with this error message
        expect(error).toEqual('getPropertyAsync requires a property name');

    }))
  );

});
