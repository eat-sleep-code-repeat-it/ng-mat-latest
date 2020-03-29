import { ISwapiResponse } from './swapi-response';

export class VehicleResponse implements ISwapiResponse {
  count:    number;
  next:     string;
  previous: string;
  results:  any[];
}

export class Vehicle {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  vehicle_class:          string;
  pilots:                 string[];
  films:                  string[];
  created:                string;
  edited:                 string;
  url:                    string;
}
