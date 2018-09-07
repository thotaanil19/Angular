import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobRunnerComponent } from './job-runner/job-runner.component';

@NgModule({
  declarations: [
    AppComponent,
    JobRunnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
