import {Component, Input} from '@angular/core';
import {IReport} from "../../_models/report";
import {MatButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {ChartData} from "chart.js";
import {NgChartsModule} from "ng2-charts";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    MatButton,
    NgChartsModule,
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  @Input() report: IReport;

  public barChartData: ChartData<'bar'> = {
    labels: ['BarGraph'],
    datasets: [
    ],
  };
  public showGraph = false;
  constructor(private http: HttpClient) {}

  toggleGraph() {
    if (!this.showGraph) {
      this.fetchData();
    } else {
      this.showGraph = false;
    }
  }

  fetchData() {
    this.http.get<any>(`https://user-assessment-api.vercel.app/api/userassessments/graph?id=${this.report.id}`)
      .subscribe(response => {
        this.processData(response.data);
        this.showGraph = true;
      });
  }

  processData(data: any) {
    this.barChartData.datasets = [
      { data: [data.agreeableness], label: 'Agreeableness' },
      { data: [data.drive], label: 'Drive' },
      { data: [data.luck], label: 'Luck' },
      { data: [data.openness], label: 'Openness' }
    ];
  }
}
