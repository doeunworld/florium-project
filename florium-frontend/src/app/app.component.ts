import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
    title: string;
    plantName: string;
    status: string; // 'Overdue' | 'Today'
    done: boolean;
}

interface Plant {
    name: string;
    latin: string;
    status: 'Healthy' | 'Thirsty' | 'Attention';
    image: string;
    lastWatered: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'florium-frontend';

    tasks: Task[] = [
        { title: 'Watering', plantName: 'Monstera Deliciosa', status: 'Overdue', done: false },
        { title: 'Pruning', plantName: 'Sweet Basil', status: 'Today', done: false },
        { title: 'Mist Leaves', plantName: 'Calathea Ornata', status: 'Today', done: false }
    ];

    plants: Plant[] = [
        {
            name: 'Monstera',
            latin: 'Monstera deliciosa',
            status: 'Healthy',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWcjKgCgZl8Dy-ukVtJpkper9en4q6dtvHRHe1V7gf2s3MXbAc4MuJBJalNxpKU5gUcWMEkTJZxOwoQ13O2MHQzGGfevGOxUIbxWc8S-Vn7XliraPsNhR3Ik4v3FdhVba2uxYqq7XswanSZz5Wzr5Y1hIltJpZCwi5IRjjgXrAJ6PNI3Msz-tD_FS0jwBUSISo27e9NPkcElKDvhWMdxcBnwzNgMWcjsKvHqSxPWR5IwSS9MN1r-_KSC5fBdB5aVnmyaJzdZHg-FI',
            lastWatered: '2 days ago'
        },
        {
            name: 'Sweet Basil',
            latin: 'Ocimum basilicum',
            status: 'Thirsty',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG_wVWSnJbI7Tvt5fxAkumBWGFN2-HXDmMHmrXKtX8LUDQ56blwocZDlA4ycLYVrqkaQwQKYd8q128db8qA6gl4sa-DI2VlLEZqC1O8DxNRhxiTYnVuC4IrQ8RLe5Iwl-or7E_3t4VV0jwbhiPg5RIzpkFprge2M3cMOq7gIiVSy7cC1dbYx61OQgXLBvLOrMaqpv4CBQBr0HNhjVTTDw0cbfEHwUnHL9NwNwtiFmpmovDHp2AEXII0JiD-9CNFUbo1N_Ii0VnhE0',
            lastWatered: '5 days ago'
        },
        {
            name: 'Fiddle Leaf',
            latin: 'Ficus lyrata',
            status: 'Healthy',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPOHH7EwKAklLiFioLEjmtcXm04u5eNjS7OpZdBQvPHTWP6qfCsdykbAI101cVHLIMoRyl5tHkzswiwTO1wy14IIWputb0ChoFqzTwhPlFfQ2EEJnnbYqm8i7L74OKBo1aq-4vx-gTI6qBj7-o3rIlP371WlHtWNWe69RItaZ9T18qpdeCe_xBGlh1oyvYb4m7wdpCKp_v_N6HghGkwYwG3si_c23aktwJUiC23dtqiq8GO9BtyY4LwubuZ6QELMoEWQNY3hO6rZ0',
            lastWatered: '1 week ago'
        }
    ];

    get todaysDate(): string {
        const date = new Date();
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    }

    get dayName(): string {
        const date = new Date();
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }
}