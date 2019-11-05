import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from './home/home.component';
import { loginComponent } from './login/login.component';
import { registroComponent } from './registro/registro.component';
import { multimediaComponent } from './multimedia/multimedia.component';
import { pinComponent } from './pin/pin.component';
import { PersonalComponent }    from './personal/personal.component';
import { WorkComponent }        from './work/work.component';
import { AddressComponent }     from './address/address.component';
import { ResultComponent }      from './result/result.component';
import { NavbarComponent }    from './navbar/navbar.component';


const appRoutes: Routes = [

{path: '',component: homeComponent},
{path: 'login',component: loginComponent},
{path: 'registro',component: registroComponent},
{path: 'multimedia',component: multimediaComponent},
{path: 'pin',component: pinComponent},
 { path: 'personal',  component: PersonalComponent },
 { path: 'work',  component: WorkComponent },
 { path: 'address',  component: AddressComponent },
 { path: 'result',  component: ResultComponent },
 { path: 'navbar',  component: NavbarComponent },




{path: '**',component: homeComponent}

]

export const appRoutingProviders:any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);





export class AppRoutingModule { } 