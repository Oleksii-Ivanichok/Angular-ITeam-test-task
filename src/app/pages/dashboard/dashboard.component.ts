import {Component, OnInit} from '@angular/core';
import {ReportsService} from "../../_services/reports.service";
import {ReportComponent} from "../../components/report/report.component";
import {AdminNavComponent} from "../../components/admin-nav/admin-nav.component";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReportComponent, AdminNavComponent, MatButton],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  isAdmin: boolean = false;
  constructor(public reportsService: ReportsService, public authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    this.reportsService.getReports().subscribe();
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }


}
