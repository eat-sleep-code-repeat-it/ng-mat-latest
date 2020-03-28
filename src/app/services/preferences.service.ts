import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { IContactPreference } from '../interfaces/i-contact-preference';


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  // dependency injection with constructor
  constructor(private browserStorage: BrowserStorageService ) { }

  // use injected service instead of BrowserStorage
  public saveProperty(preference: IContactPreference) {
    if (!(preference.key && preference.key.length)) {
      throw new Error('saveProperty requires a non-blank property name');
    }
    this.browserStorage.setItem(preference.key, preference.value);
  }

  // use injected service instead of BrowserStorage
  public getProperty(key: string) : any {
    return this.browserStorage.getItem(key);
  }
}
