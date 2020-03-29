import { ISwapiResponse } from './swapi-response';

export class SpeciesResponse implements ISwapiResponse {
  count:    number;
  next:     string;
  previous: string;
  results:  any[];
}

export interface  Species {
  name:             string;
  classification:   string;
  designation:      Designation;
  average_height:   string;
  skin_colors:      string;
  hair_colors:      string;
  eye_colors:       string;
  average_lifespan: string;
  homeworld:        string;
  language:         string;
  people:           string[];
  films:            string[];
  created:          string;
  edited:           string;
  url:              string;
}

export enum Designation {
  Sentient = "sentient",
}
