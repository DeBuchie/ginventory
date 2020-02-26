import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MainLayoutComponent, NavigationComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    // ngrx
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([]),

    // material
    MatToolbarModule,
    MatButtonModule,
    NgbCollapseModule,
  ],
  exports:[MainLayoutComponent]
})
export class CoreModule { }
