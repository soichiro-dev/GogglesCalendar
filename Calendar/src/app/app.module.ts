import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './parts/header/header.component';
import { ContentComponent } from './parts/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ErrorComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
