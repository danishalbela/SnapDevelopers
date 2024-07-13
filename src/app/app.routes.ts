import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompressorComponent } from './pages/compressor/compressor.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
         path:'compressor',
         component:CompressorComponent
    },
];
