import { Routes } from '@angular/router';
// 아래 경로가 실제 PlantListComponent 파일 위치와 맞는지 확인해야 합니다!
import { PlantListComponent } from './plants/plant-list/plant-list.component';

export const routes: Routes = [
    { path: '', component: PlantListComponent },
    { path: '**', redirectTo: '' }
];