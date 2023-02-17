import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoadingOverlayComponent } from './layout/loading-overlay/loading-overlay.component';
import { LoadingService } from './layout/services/loading.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoadingOverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoadingService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
