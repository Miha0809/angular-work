import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { services } from './_services';
import { modules } from './_modules';
import { components } from './_components';

@NgModule({
  declarations: [
    AppComponent,
    components
  ],
  imports: [
    modules,
  ],
  providers: [
    services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
