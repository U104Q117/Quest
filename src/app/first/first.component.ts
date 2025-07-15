import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [FormsModule,
           RouterOutlet,
           RouterLinkActive,
           RouterLink,],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

constructor(private router:Router){}

  searchKeyword = '';
  findtheTime = '';
  endthisTime = '';
  currentPage = 1;
  itemsPerPage = 10;

  students = [
    { id: 1, main: '我睡死了', starttime: '2025-03-04', endtime: '2025-03-08', result: '投票結果' },
    { id: 2, main: '沒搭到車', starttime: '2025-01-02', endtime: '2025-01-06', result: '投票結果' },
    { id: 3, main: '路上有狗', starttime: '2024-03-05', endtime: '2024-06-09', result: '投票結果' },
    { id: 4, main: '去NMD', starttime: '2024-05-07', endtime: '2025-07-10', result: '投票結果' },
    { id: 5, main: '老闆沒來', starttime: '2024-03-02', endtime: '2025-05-10', result: '投票結果' },
    { id: 6, main: '趕快偷跑回家', starttime: '2025-04-05', endtime: '2025-05-11', result: '投票結果'},
    { id: 7, main: '我睡死了1', starttime: '2025-03-04', endtime: '2025-03-08', result: '投票結果' },
    { id: 8, main: '沒搭到車1', starttime: '2025-01-02', endtime: '2025-01-06', result: '投票結果' },
    { id: 9, main: '路上有狗1', starttime: '2024-03-05', endtime: '2024-06-09', result: '投票結果' },
    { id: 10, main: '去NMD1', starttime: '2024-05-07', endtime: '2025-07-10', result: '投票結果' },
    { id: 11, main: '老闆沒來1', starttime: '2024-03-02', endtime: '2025-05-10', result: '投票結果' },
    { id: 12, main: '趕快偷跑回家1', starttime: '2025-04-05', endtime: '2025-05-11', result: '投票結果'},
    { id: 13, main: '我睡死了2', starttime: '2025-03-04', endtime: '2025-03-08', result: '投票結果' },
    { id: 14, main: '沒搭到車2', starttime: '2025-01-02', endtime: '2025-01-06', result: '投票結果' },
    { id: 15, main: '路上有狗2', starttime: '2024-03-05', endtime: '2024-06-09', result: '投票結果' },
    { id: 16, main: '去NMD2', starttime: '2024-05-07', endtime: '2025-07-10', result: '投票結果' },
    { id: 17, main: '老闆沒來2', starttime: '2024-03-02', endtime: '2025-05-10', result: '投票結果' },
    { id: 18, main: '趕快偷跑回家2', starttime: '2025-04-05', endtime: '2025-05-11', result: '投票結果' },
    { id: 19, main: '老闆沒來2', starttime: '2024-03-02', endtime: '2025-05-10', result: '投票結果' },
    { id: 20, main: '趕快偷跑回家2', starttime: '2025-04-05', endtime: '2025-05-11', result: '投票結果'},
    { id: 21, main: '我睡死了3', starttime: '2025-03-04', endtime: '2025-03-08', result: '投票結果' },
    { id: 22, main: '沒搭到車3', starttime: '2025-01-02', endtime: '2025-01-06', result: '投票結果' },
    { id: 23, main: '路上有狗3', starttime: '2024-03-05', endtime: '2024-06-09', result: '投票結果' },
    { id: 24,main: '去NMD3', starttime: '2024-05-07', endtime: '2025-07-10', result: '投票結果' },
    { id: 25, main: '老闆沒來3', starttime: '2024-03-02', endtime: '2025-05-10', result: '投票結果' },
    { id: 26, main: '趕快偷跑回家3', starttime: '2025-04-05', endtime: '2025-05-11', result: '投票結果' },
    { id: 27, main: '沒搭到車3', starttime: '2025-01-02', endtime: '2025-01-06', result: '投票結果' },
    { id: 28, main: '路上有狗3', starttime: '2024-03-05', endtime: '2024-06-09', result: '投票結果' },
    { id: 29,main: '去NMD3', starttime: '2024-05-07', endtime: '2025-07-10', result: '投票結果' },
    { id: 30, main: '老闆沒來3', starttime: '2024-03-02', endtime: '2025-05-10', result: '投票結果' },
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
