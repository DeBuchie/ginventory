import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HeroImageComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    HeroImageComponent,
    HttpClientModule
  ],
})
export class SharedModule { }
