import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../_services/admin/users.service";
import {AdminNavComponent} from "../../components/admin-nav/admin-nav.component";
import {ReportComponent} from "../../components/report/report.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableModule
} from "@angular/material/table";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    AdminNavComponent,
    ReportComponent,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatTableModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  displayedColumns: string[] = ['name', 'lastName', 'dateOfBirth', 'education', 'role', 'position'];
  constructor(public userService: UsersService) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }
}
