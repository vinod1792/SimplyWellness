import { Routes } from '@angular/router';

import { Home } from './pages/home/home';

import { PublicSpeaking } from './pages/public-speaking/public-speaking';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'public-speaking', component: PublicSpeaking },
  { path: '**', redirectTo: '' }
];
