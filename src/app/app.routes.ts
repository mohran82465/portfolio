import { Routes } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';

export const routes: Routes = [
  {
    path: 'home', component: CoverComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'portfolio', component: WorksComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }, 
];
