import { AddLinksComponent } from './components/links/add-links/addlinks.component';
import { LinksComponent } from './components/links/links.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: LinksComponent },
  { path: 'addsports', component: AddLinksComponent },
  { path: 'addsports/:id', component: AddLinksComponent },
  {
    path: 'registermodule',
    loadChildren: () =>
      import('./components/registration/registration.module').then(
        (m) => m.RegisterModules
      ),
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
