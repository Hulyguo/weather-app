import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CitySearchComponent } from './shared/components/CitySearch/city-search.component';
import { DashboardComponent } from './shared/components/Dashboard/dashboard.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatInputModule,
        MatDividerModule,
        MatSelectModule,
        MatCardModule,
        GoogleMapsModule
      ],
      declarations: [
        AppComponent,
        CitySearchComponent,
        DashboardComponent
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
