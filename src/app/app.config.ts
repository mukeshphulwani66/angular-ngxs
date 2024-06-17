import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { routes } from './app.routes';
import {withNgxsReduxDevtoolsPlugin} from '@ngxs/devtools-plugin'
import { GroceryState } from '../store/states/grocery.state';
import { BucketState } from '../store/states/bucket.state';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore([GroceryState,BucketState], withNgxsReduxDevtoolsPlugin())
  ]
};
