import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MemorialItem {
    name: string;
    date: string; // ISO format for calculation
    image: string;
    message: string;
}

@Component({
    selector: 'app-plant-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './plant-list.component.html',
    styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
    items: MemorialItem[] = [
        {
            name: 'Lovely Coco',
            date: '2023-05-15',
            image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600',
            message: 'Always in our hearts.'
        },
        {
            name: 'Grandma’s Hydrangea',
            date: '2020-08-20',
            image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=600',
            message: 'Blooming every summer, just like her smile.'
        },
        {
            name: 'First Olive Tree',
            date: '2024-01-10',
            image: 'https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?auto=format&fit=crop&q=80&w=600',
            message: 'Growing strong together.'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    getDaysCount(dateStr: string): number {
        const start = new Date(dateStr).getTime();
        const now = new Date().getTime();
        const diff = now - start;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
}
