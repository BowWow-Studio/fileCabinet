import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './interceptor';
import {FlexLayoutModule} from '@angular/flex-layout';
import { OptionComponent } from './option/option.component';
import { TableComponent } from './table/table.component';
import { BodyTableComponent } from './body-table/body-table.component';
@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    TableComponent,
    BodyTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatModule,
    FlexLayoutModule
  ],
  providers: [[{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
