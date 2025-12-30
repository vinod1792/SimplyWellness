import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Consult } from './pages/consult/consult';
import { Contact } from './pages/contact/contact';
import { Resources } from './pages/resources/resources';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'consult', component: Consult },
  { path: 'contact', component: Contact },
  { path: 'resources', component: Resources },
  { path: '**', redirectTo: '' }
];
