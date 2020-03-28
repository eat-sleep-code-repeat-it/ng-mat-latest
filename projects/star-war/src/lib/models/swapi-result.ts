// Generated by https://quicktype.io

export interface ISwapiResponse {
  count:    number;
  next:     null;
  previous: null;
  results:  any[];
}
export class PeopleResponse implements ISwapiResponse {
  count:    number;
  next:     null;
  previous: null;
  results:  People[];
}

export class People {
  title:         string;
  episode_id:    number;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  string;
  characters:    string[];  // url link
  planets:       string[];  // url link
  starships:     string[];  // url link
  vehicles:      string[];  // url link
  species:       string[];  // url link
  created:       string;
  edited:        string;
  url:           string;
}
