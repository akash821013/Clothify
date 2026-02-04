import { Routes } from '@angular/router';
import { Blankpage } from './application/layout/blankpage/blankpage';
import { Fullpage } from './application/layout/fullpage/fullpage';

export const routes: Routes = [
    {
        path: '',
        component: Blankpage,
        children: [
            {
                path: '',
                redirectTo: 'user',
                pathMatch: 'full'
            },
            {
                path: 'user',
                loadChildren: () => import('./application/modules/user/user-module').then(m => m.UserModule)
            }
        ]
    },

    {
        path: '',
        component: Fullpage,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./application/modules/dashboard/dashboard-module').then(m => m.DashboardModule)
            }
        ]
    }
];
