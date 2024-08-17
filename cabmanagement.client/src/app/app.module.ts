import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyModalComponent } from './components/company-modal/company-modal.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriverModalComponent } from './components/driver-modal/driver-modal.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleModalComponent } from './components/vehicle-modal/vehicle-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    NavigationComponent,
    CompanyComponent,
    CompanyModalComponent,
    DriverComponent,
    DriverModalComponent,
    VehicleComponent,
    VehicleModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
