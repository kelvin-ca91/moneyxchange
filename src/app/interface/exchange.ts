export interface IExchange {
  success: boolean;
  timestamp: Date;
  date: string;
  rates: {
    ARS: number;
    USD: number;
    PER: number;
  };
}
