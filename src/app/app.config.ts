import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter , withComponentInputBinding} from '@angular/router';
import { NgModule } from '@angular/core';
import {routes} from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,  withComponentInputBinding()), provideClientHydration(), provideHttpClient()]
};
