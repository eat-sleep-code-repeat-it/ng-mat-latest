import { TestBed, inject } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';
import { BrowserStorageService } from './browser-storage.service';
import { IContactPreference } from '../interfaces/i-contact-preference';

// create BrowserStorageMock
class BrowserStorageMock {
  getItem = (property: string) => ({ key: 'testProp', value: 'testValue '});
  setItem = (property: string, value: string | object) => {};
}

describe('PreferencesService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    // TestBed module is configured before every test
    TestBed.configureTestingModule({
      // configure the TestBed dependency injection to use Mock instead of the real service
      providers: [
        PreferencesService, {
          provide: BrowserStorageService, useClass: BrowserStorageMock
        }
      ]
    });
    service = TestBed.inject(PreferencesService);    
  });

  // the first test only checks that the service test setup is right
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // check that the service test with injection setup is right
  it('should create the Preferences Service', inject([PreferencesService], (service: PreferencesService) => {
    expect(service).toBeTruthy();
  }));

  describe('save preferences', () => {
    // use inject to get the BrowserStorageMock
    it('should save a preference', inject([PreferencesService, BrowserStorageService],
      (service: PreferencesService, browserStorage: BrowserStorageMock) => {

        // add a spy to browserStorage.setItem
        spyOn(browserStorage, 'setItem').and.callThrough();

        // call saveProperty
        const preference: IContactPreference = { key: 'myProperty', value: 'myValue' };
        service.saveProperty(preference);
        
        // check the spy to make sure it was called from saveProperty()
        expect(browserStorage.setItem).toHaveBeenCalledWith('myProperty', 'myValue');
      })
    );

    // testing for failure
    it('saveProperty should require a non-zero length key', inject([PreferencesService],
      (service: PreferencesService) => {

        // create a wrapper for any function that is supposed to throw an error
        const throws = () => {
          service.saveProperty({ key: '', value: '' });
        }

        // expect the function to throw an error
        expect(throws).toThrowError();
      })
    );
  });

  describe('get preferences', () => {
    it(`has a 'saveProperty' method`, inject([PreferencesService, BrowserStorageService],
        (service: PreferencesService, browserStorage: BrowserStorageMock ) => {

            expect(service.getProperty).toBeDefined();
        })
    );

    it(`returns a ContactPreference`, inject([PreferencesService, BrowserStorageService],
        (service: PreferencesService, browserStorage: BrowserStorageMock) => {
          const mockItem = { 'key' : 'pref', value: 'myValue' };
          spyOn(browserStorage, 'getItem').and.returnValue(mockItem);

          const prefs = service.getProperty('getItem');
          expect(prefs.key).toEqual('pref');
          expect(prefs.value).toEqual('myValue');
        })
    );
    
  });

});
