import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cartReducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CartEffect } from './effects/cartEffect';
import { CartService } from './services/cartService';
import { SummaryComponent } from './summary/summary.component';
import { CartComponent } from './cart/cart.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CartComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({cart: cartReducer }),
    EffectsModule.forRoot([CartEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
  ],

  providers: [CartService],
  bootstrap: [AppComponent]
})

export class AppModule { }
