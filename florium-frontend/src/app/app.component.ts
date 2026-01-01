import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonApp, IonContent, IonHeader, IonFooter, IonToolbar, IonTitle, IonButton, IonInput, IonItem, IonLabel, IonList, IonTabs, IonTabBar, IonTabButton, IonIcon, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
    selector: 'app-root',
    standalone: true,
    // 💡 아래 imports에 HttpClientModule이 들어있는지 꼭 확인하세요!
    imports: [CommonModule, FormsModule, HttpClientModule, IonApp, IonContent, IonHeader, IonFooter, IonToolbar, IonTitle, IonButton, IonInput, IonItem, IonLabel, IonList, IonTabs, IonTabBar, IonTabButton, IonIcon, IonSelect, IonSelectOption],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    // 입력창을 열고 닫는 상태 변수
    isAdding = false;

    // 새로 추가할 식물 정보 (초기값)
    newPlant = {
        name: '',
        latin: '',
        status: 'Healthy',
        image: '',
        lastWatered: 'Just now'
    };

    // 입력창 열기/닫기 함수
    toggleAddForm() {
        this.isAdding = !this.isAdding;
    }

    // 백엔드에 저장 요청하는 함수
    addPlant() {
        this.http.post('http://192.168.45.227:3000/plants', this.newPlant).subscribe({
            next: (result) => {
                console.log('추가 성공!', result);
                this.fetchPlants(); // 목록 새로고침
                this.isAdding = false; // 입력창 닫기
                // 입력창 초기화
                this.newPlant = { name: '', latin: '', status: 'Healthy', image: '', lastWatered: 'Just now' };
            },
            error: (err) => console.error('추가 실패ㅠㅠ', err)
        });
    }


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
        this.http.get<any[]>('http://192.168.45.227:3000/plants').subscribe({
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