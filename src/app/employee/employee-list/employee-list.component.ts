import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private service: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.employees = data);
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.employees = this.employees.filter(e => e.id !== id);
    });
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  add(): void {
   add']);
  }
}
