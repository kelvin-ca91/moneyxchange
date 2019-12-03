import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ExchangeService {
  private token = `?access_key=${environment.accessKeyFixer}`;
  private fixerUrl = `${environment.baseUrlFixer}/latest`;
  constructor(private http: HttpClient) {}

  public getExchangeRate() {
    return this.http.get(`${this.fixerUrl}${this.token}`);
  }

  public getEchangeRateHistoric(date:string) {
    return this.http.get(`${environment.baseUrlFixer}/${date}${this.token}`).toPromise();
  }
}
