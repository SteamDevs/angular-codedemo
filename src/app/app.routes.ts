import { RouterModule, Routes } from '@angular/router';

///Componentes
import { PruebaComponent } from './prueba/prueba.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';


const APP_ROUTING : Routes = [
    {path: 'prueba', component: PruebaComponent },
    {path: 'navbar', component: NavbarComponent},
    {path: 'dash', component: DashboardComponent},
    { path: '',   redirectTo: '/dash', pathMatch: 'full' },
    {path: 'perfil', component: PerfilComponent }
]

export const APP_ROUTES = RouterModule.forRoot( APP_ROUTING, { useHash: true })
