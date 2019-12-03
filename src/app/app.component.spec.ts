import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CalculateComponent } from './components/calculate/calculate.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        CalculateComponent,
        FooterComponent,
        CurrencySymbolPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
