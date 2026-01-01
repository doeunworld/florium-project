import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // HttpClientModule 추가

@Component({
    selector: 'app-root',
    standalone: true,
    // 💡 아래 imports에 HttpClientModule이 들어있는지 꼭 확인하세요!
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    private http = inject(HttpClient);

    dayName = 'Wednesday';
    todaysDate = 'October 24';

    // 💡 기존의 모든 데이터를 지우고 빈 배열로 만듭니다. 
    // 그래야 백엔드 데이터가 들어오는지 확실히 알 수 있습니다.
    plants: any[] = [];
    tasks: any[] = [];

    ngOnInit() {
        this.fetchPlants();
    }

    fetchPlants() {
        // 💡 주소가 정확한지 다시 확인 (http://localhost:3000/plants)
        this.http.get<any[]>('http://localhost:3000/plants').subscribe({
            next: (data) => {
                this.plants = data;
                console.log('백엔드 데이터 수신 성공:', data);
            },
            error: (err) => {
                console.error('백엔드 연결 실패:', err);
            }
        });
    }
}