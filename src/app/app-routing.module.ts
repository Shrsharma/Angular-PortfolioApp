import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BgImgComponent } from './bg-img/bg-img.component';
import { LogInComponent } from './register/log-in/log-in.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: "Img",component: BgImgComponent
  },
  {
    path:'', component: BgImgComponent
  },
  {
    path: "/Log", component: LogInComponent
  },

  {
    path: "Sign", component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
