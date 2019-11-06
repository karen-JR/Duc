import { NgModule }             from '@angular/core';


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

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';


const appRoutes: Routes = [

{path: '',component: homeComponent},
{path: 'login',component: loginComponent},
{path: 'registro',component: registroComponent},
{path: 'multimedia',component: multimediaComponent},
{path: 'pin',component: pinComponent},
 { path: 'personal',  component: PersonalComponent },
 { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
 { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
 { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
 { path: 'navbar',  component: NavbarComponent },




{path: '**',component: homeComponent}

]

export const appRoutingProviders:any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



  @NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})


export class AppRoutingModule { } 


