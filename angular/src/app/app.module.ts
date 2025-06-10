import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatesaleComponent } from './components/sale/create-sale/create-sale.component'
import { NavbarComponent } from '../app/layout/navbar/navbar.component'
import { appRoutes } from './route'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { saleService } from 'src/services/sale.service';
import { ListOfsaleComponent } from './components/sale/list-of-sale/list-of-sale.component';
import { EditsaleComponent } from './components/sale/edit-sale/edit-sale.component';
import { DeletesaleModalComponent } from './components/sale/delete-sale-modal/delete-sale-modal.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      CreatesaleComponent,
      EditsaleComponent,
      DeletesaleModalComponent,
      ListOfsaleComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgHttpLoaderModule.forRoot(),
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 3000,
         positionClass: 'toast-top-center',
         preventDuplicates: true,
      }),
      FormsModule
   ],
   providers: [
      saleService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
