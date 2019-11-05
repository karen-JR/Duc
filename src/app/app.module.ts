import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }        from '@angular/forms';

import { routing, appRoutingProviders }   from './app.routing';

import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { loginComponent } from './login/login.component';
import { registroComponent } from './registro/registro.component';
import { multimediaComponent } from './multimedia/multimedia.component';
import { pinComponent } from './pin/pin.component';
import { NavbarComponent }    from './navbar/navbar.component';
 
/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';
 import { FormDataService }    from './data/formData.service';


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    loginComponent,
    registroComponent,
    multimediaComponent,
    pinComponent,
    NavbarComponent, 
    PersonalComponent, 
    WorkComponent, 
    AddressComponent, 
    ResultComponent 
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
