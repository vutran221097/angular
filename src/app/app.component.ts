import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list.component';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  // define state
  list = [];

  ngOnInit(): void {
    this.apiService.getSomeData('').subscribe(
      (data) => {
        // Xử lý dữ liệu khi nhận được từ API
        this.list = data.results;
        console.log(this.list);
      },
      (error) => {
        // Xử lý lỗi khi gọi API không thành công
        console.error(error);
      }
    );
  }
}
