import { Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters-list/characters-list';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "characters", component: CharactersListComponent },
    { path: "characters/:id", component: CharactersDetailComponent},
];
