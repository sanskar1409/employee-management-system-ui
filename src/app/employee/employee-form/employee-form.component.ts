import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
: Employee = { name: '', email: '', department: '', salary: 0 };
  isEdit = false;

  constructor(private service: EmployeeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const.navigate(['/']));
    } else {
      this.service.create(this.employee).subscribe(() => this.router.navigate(['/']));
    }
  }
}
