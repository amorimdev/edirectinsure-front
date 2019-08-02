import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { ServicesModule } from '../services/services.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ServicesModule
  ],
  exports: [
    FontAwesomeModule,
    NavbarComponent
  ]
})
export class SharedModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    }
  }
}
