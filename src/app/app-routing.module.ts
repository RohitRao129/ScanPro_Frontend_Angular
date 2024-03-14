import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { IsLoggedInService } from './GuardServices/is-logged-in.service';
import { HomePageComponent } from './home-page/home-page.component';
import { NewFileComponent } from './new-file/new-file.component';
import { RepoHomeComponent } from './repo-home/repo-home.component';
import { RepoManageComponent } from './repo-manage/repo-manage.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ShowImgComponent } from './show-img/show-img.component';

const routes: Routes = [
  { path: '', component: HomePageComponent ,canActivate :[IsLoggedInService]},
  { path:"repo",component: RepoHomeComponent ,canActivate :[IsLoggedInService]},
  { path:"manageRepo/:name",component: RepoManageComponent ,canActivate :[IsLoggedInService]},
  { path:"addDirectory/:path/:type",component: NewFileComponent ,canActivate :[IsLoggedInService]},
  { path:"showImg/:path",component: ShowImgComponent ,canActivate :[IsLoggedInService]},
  { path:"authpage",component: AuthPageComponent},
  { path:"email/verification",component: EmailVerificationComponent},
  { path:"reset/password", component : ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
