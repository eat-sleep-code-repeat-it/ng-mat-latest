import { TestBed, inject } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';
import { BrowserStorageService } from './browser-storage.service';
import { IContactPreference } from '../interfaces/i-contact-preference';

class BrowserStorageMock {
  getItem = (property: string) => ({ key: 'testProp', value: 'testValue '});
  setItem = (preference: IContactPreference) => {};
}

describe('PreferencesService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PreferencesService, {
          provide: BrowserStorageService, useClass: BrowserStorageMock
        }
      ]
    });
    service = TestBed.inject(PreferencesService);    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create the Preferences Service', inject([PreferencesService], (service: PreferencesService) => {
    expect(service).toBeTruthy();
  }));

  describe('save preferences', () => {
    it('should save a preference', inject([PreferencesService, BrowserStorageService],
      (service: PreferencesService, browserStorage: BrowserStorageMock) => {
        spyOn(browserStorage, 'setItem').and.callThrough();

        const preference: IContactPreference = { key: 'myProperty', value: 'myValue' };
        service.saveProperty(preference);
        
        expect(browserStorage.setItem).toHaveBeenCalledWith(preference);
      })
    );
    it('saveProperty should require a non-zero length key', inject([PreferencesService],
      (service: PreferencesService) => {

          const throws = () =>  service.saveProperty({ key: '', value: '' });
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
