import { ISwapiResponse } from './swapi-response';

export class FilmResponse implements ISwapiResponse {
  count:    number;
  next:     string;
  previous: string;
  results:  any[];
}

export class Film {
  title:         string;
  episode_id:    number;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  string;
  characters:    string[];
  planets:       string[];
  starships:     string[];
  vehicles:      string[];
  species:       string[];
  created:       string;
  edited:        string;
  url:           string;
}
