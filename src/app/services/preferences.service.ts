import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { IContactPreference } from '../interfaces/i-contact-preference';


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private browserStorage: BrowserStorageService ) { }

  public saveProperty(preference: IContactPreference) {
    if (!preference.key.length) {
      throw new Error('saveProperty requires a non-blank property name');
    }
    this.browserStorage.setItem(preference);
  }

  public getProperty(key: string) : any {
    return this.browserStorage.getItem(key);
  }
}
