import { MatTooltipModule } from '@angular/material/tooltip';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [FormsModule,
           RouterOutlet,
           RouterOutlet,
           RouterLinkActive,
           RouterLink,
           MatTooltipModule
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

constructor(private router:Router){}

  searchKeyword = '';
  findtheTime = '';
  endthisTime = '';

  students = [
    { id: 1, main: '我睡死了', starttime: '2025-03-04', endtime: '2025-03-08', result: '投票結果' },
    { id: 2, main: '沒搭到車', starttime: '2025-01-02', endtime: '2025-01-06', result: '投票結果' },
    { id: 3, main: '路上有狗', starttime: '2024-03-05', endtime: '2024-06-09', result: '投票結果' },
    { id: 4, main: '去NMD', starttime: '2024-05-07', endtime: '2025-07-10', result: '投票結果' },
    { id: 5, main: '老闆沒來', starttime: '2024-03-02', endtime: '2025-05-10', result: '投票結果' },
    { id: 6, main: '趕快偷跑回家', starttime: '2025-04-05', endtime: '2025-05-11', result: '投票結果' }
  ];

  get filteredStudents() {
    return this.students.filter(student => {
      // 比對關鍵字（主題 或 ID）
      let matchKeyword = student.main.includes(this.searchKeyword) ||
        student.id.toString().includes(this.searchKeyword);

      // 時間區間比對
      let studentStart = new Date(student.starttime).getTime();
      let studentEnd = new Date(student.endtime).getTime();
      let start = this.findtheTime ? new Date(this.findtheTime).getTime() : -Infinity;
      let end = this.endthisTime ? new Date(this.endthisTime).getTime() : Infinity;

      let inTimeRange = studentEnd >= start && studentStart <= end;

      return matchKeyword && inTimeRange;
    });
  }
}







