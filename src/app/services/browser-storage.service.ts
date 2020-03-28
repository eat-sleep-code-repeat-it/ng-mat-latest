import { Injectable } from '@angular/core';
import { IContactPreference } from '../interfaces/i-contact-preference';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor() { }
  getItem: (property: string) => string | object;
  setItem: (preference: IContactPreference) => void;
}

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageAsyncService {

  constructor() { }
  getItem: (property: string) => Promise<IContactPreference>;
  setItem: (preference: IContactPreference) => Promise<boolean>;
}
