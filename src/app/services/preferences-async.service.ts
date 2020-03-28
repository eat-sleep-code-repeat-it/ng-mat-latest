import { Injectable } from '@angular/core';
import { BrowserStorageAsyncService } from './browser-storage.service';
import { IContactPreference } from '../interfaces/i-contact-preference';

@Injectable({
  providedIn: 'root'
})
export class PreferencesAsyncService {

  constructor(private browserStorage: BrowserStorageAsyncService) { }

  savePropertyAsync(preference: IContactPreference) : Promise<boolean> {
      return this.browserStorage.setItem(preference);
  }

  getPropertyAsync(key: string) : Promise<IContactPreference> {
      if (!key.length) {
          return Promise.reject('getPropertyAsync requires a property name');
      } else {
          return this.browserStorage.getItem(key);
      }
  }
}