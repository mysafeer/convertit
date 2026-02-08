
export enum ConversionType {
  UNIT = 'UNIT',
  CURRENCY = 'CURRENCY',
  DATA = 'DATA',
  SMART = 'SMART'
}

export interface UnitCategory {
  name: string;
  units: string[];
}

export interface ConversionHistoryItem {
  id: string;
  input: string;
  output: string;
  type: ConversionType;
  timestamp: number;
}
