import { Component, OnInit } from "@angular/core";
import { ExchangeService } from "src/app/services/exchange.service";
import { IExchange } from "src/app/interface/exchange";
import * as moment from "moment";

@Component({
  selector: "app-calculate",
  templateUrl: "./calculate.component.html",
  styleUrls: ["./calculate.component.scss"]
})
export class CalculateComponent implements OnInit {
  private datesHistoric = [
    moment
      .utc()
      .add(-1, "d")
      .format("YYYY-MM-DD"),
    moment
      .utc()
      .add(-2, "d")
      .format("YYYY-MM-DD"),
    moment
      .utc()
      .add(-3, "d")
      .format("YYYY-MM-DD")
  ];

  public moneyExchange: number = 0;
  public typeMoneyExchange = { type: "USD", symbol: "$" };
  public ratesExchange: IExchange;
  public listHistoric = [];

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {
    this.loadRatesExchange();
    this.loadRatesExchangeHistoric();
  }

  public calculate(form: { amount: number }) {
    const amount = form.amount;
    this.moneyExchange =
      amount > 0
        ? this.ratesExchange.rates[this.typeMoneyExchange.type] * amount
        : 0;
  }

  private loadRatesExchange() {
    this.exchangeService.getExchangeRate().subscribe((result: IExchange) => {
      this.ratesExchange = result;
    });
  }

  private loadRatesExchangeHistoric() {
    Promise.all([
      this.exchangeService.getEchangeRateHistoric(this.datesHistoric[0]),
      this.exchangeService.getEchangeRateHistoric(this.datesHistoric[1]),
      this.exchangeService.getEchangeRateHistoric(this.datesHistoric[2])
    ]).then((result: any[]) => {
      this.listHistoric = result.map( item=> {
        const newRate = [];
        for (const key in item.rates) {
          newRate.push({ iso: key, value: item.rates[key] })
        }
        return {
          ...item,
          rates: newRate,
        }
      });
    });
  }
}
