import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { NgModule } from '@angular/core';
import { routeConfig  } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideClientHydration()]
};
