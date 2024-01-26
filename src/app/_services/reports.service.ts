import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {IReport} from "../_models/report";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl = 'https://user-assessment-api.vercel.app/';

  constructor(private http: HttpClient) { }

  reports: IReport[] = [];
  getReports():Observable<IReport[]>{
    return this.http.get<IReport[]>(this.baseUrl + 'api/userassessments').pipe(
      tap(reports => this.reports = reports)
    )
  }
}
