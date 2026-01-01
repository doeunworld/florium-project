// app.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common'; // Post와 Body 추가

@Controller('plants')
export class AppController {
    // 임시 데이터 저장소 (배열)
    private plants = [
        {
            name: 'Monstera',
            latin: 'Monstera deliciosa',
            status: 'Healthy',
            image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop',
            lastWatered: '2 days ago',
        },
        {
            name: 'Table Palm',
            latin: 'Chamaedorea elegans',
            status: 'Healthy',
            image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=1964&auto=format&fit=crop',
            lastWatered: 'Weekly',
        },
    ];

    @Get()
    getPlants() {
        return this.plants;
    }

    // 👇 데이터를 추가하는 함수 추가!
    @Post()
    addPlant(@Body() newPlant: any) {
        console.log('새 식물 데이터 도착:', newPlant);
        this.plants.push(newPlant); // 배열에 추가
        return newPlant; // 성공적으로 추가된 데이터 반환
    }
}