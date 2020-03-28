import { Injectable } from '@angular/core';
import { IContactPreference } from '../interfaces/i-contact-preference';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor() { }
  getItem: (property: string) => string | object;
  setItem: (property: string, value: string | object) => void;
}

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageAsyncService {
  // stubbed class prior to implement storage
  constructor() { }
  getItem: (property: string) => Promise<IContactPreference>;
  setItem: (property: string, value: string | object) => Promise<boolean>;
}
