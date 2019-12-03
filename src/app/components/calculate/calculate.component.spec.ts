import { async, ComponentFixture, TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CalculateComponent } from "./calculate.component";
import { ExchangeService } from "src/app/services/exchange.service";
import { CurrencySymbolPipe } from "src/app/pipes/currency-symbol.pipe";
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe(`Test for calculate money exchange`, () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;
  let injector: TestBed;
  let service: ExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateComponent, CurrencySymbolPipe],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ExchangeService]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(ExchangeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should return the multiplication of the amount by the exchange rate", () => {
    spyOn(service, "getExchangeRate").and.callFake(() => {
      return of({
        success: true,
        timestamp: 1535328192,
        base: "EUR",
        date: "2018-08-27",
        rates: {
          USD: 1.164063
        }
      });
    });
    component.ngOnInit();
    component.calculate({ amount: 2 });
    expect(component.moneyExchange).toBe(2.328126);
  });
});
