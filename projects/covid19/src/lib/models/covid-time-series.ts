export class CovidTimeSeries {
  name: string;
  series: CovidDayValue[];
}

export class CovidDayValue {
  name: string;
  value: number;
}