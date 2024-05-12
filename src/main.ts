import { bootstrapApplication, provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routes),
      provideClientHydration(),
      provideHttpClient()
    ]
  }
).catch(err => console.error(err));


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
