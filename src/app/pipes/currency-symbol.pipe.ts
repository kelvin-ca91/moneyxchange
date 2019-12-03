import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currencySymbol"
})
export class CurrencySymbolPipe implements PipeTransform {
  transform(value: string, symbol: string): any {
    if (value) return `${symbol} ${value}`;
    return null;
  }
}
