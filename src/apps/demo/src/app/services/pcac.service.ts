import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ITableConfig,
  IPcacBarVerticalChartConfig,
  ILineAreaChartConfig,
  IPcacBarHorizontalChartConfig
} from '@pioneer-code/pioneer-code-angular-charts';
import { PcacRepository } from '../repository/pcac.repository';


@Injectable()
export class PcacService {
  tableConfig: ITableConfig;
  barVerticalChartConfig: IPcacBarVerticalChartConfig;
  barHorizontalChartConfig: IPcacBarHorizontalChartConfig;
  lineChartConfig: ILineAreaChartConfig;
  areaChartConfig: ILineAreaChartConfig;

  constructor(private repository: PcacRepository) { }

  getData() {
    this.repository.getTable()
      .subscribe(data => this.tableConfig = data);

    this.repository.getBarVerticalChart()
      .subscribe(data => this.barVerticalChartConfig = data);

    this.repository.getBarHorizontalChart()
      .subscribe(data => this.barHorizontalChartConfig = data);

    this.repository.getLineChart()
      .subscribe(data => this.lineChartConfig = data);

    this.repository.getAreaChart()
      .subscribe(data => this.areaChartConfig = data);
  }
}
