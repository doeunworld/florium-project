import { Controller, Get } from '@nestjs/common';

@Controller('plants')
export class AppController {
    @Get()
    findAll() {
        return [
            {
                id: 1,
                name: 'Monstera',
                latin: 'Monstera deliciosa',
                status: 'Healthy',
                lastWatered: '2 days ago',
                image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 2,
                name: 'Table Palm',
                latin: 'Chamaedorea elegans',
                status: 'Thirsty',
                lastWatered: '5 days ago',
                image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop'
            }
        ];
    }
}