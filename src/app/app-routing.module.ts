import { NgModule } from '@angular/core';
import { RouterModule, Routes ,CanActivate} from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

const routes: Routes = [
  {path:"",component:CommentsComponent},
  {path:"admin",component:AdminComponent , canActivate:[AuthGuard]},
  {path:"unauthorized",component:UnauthorizedComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
