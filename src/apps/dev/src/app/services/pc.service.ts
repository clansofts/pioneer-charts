import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IPcacTableConfig,
  IPcacBarVerticalChartConfig,
  IPcacLineAreaChartConfig,
  IPcacBarHorizontalChartConfig,
  IPcacPieChartConfig,
  IPcacData
} from '@pioneer-code/pioneer-charts';
import { PcRepository } from '../repository/pc.repository';

@Injectable()
export class PcService {
  tableConfig: IPcacTableConfig;
  barVerticalChartConfig: IPcacBarVerticalChartConfig;
  barHorizontalChartConfig: IPcacBarHorizontalChartConfig;
  lineChartConfig: IPcacLineAreaChartConfig;
  areaChartConfig: IPcacLineAreaChartConfig;
  pieChartConfig: IPcacPieChartConfig;
  sharedConfig: IPcacData[];
  currentMainRoute = 'home';
  currentDocRoute = 'bar-chart';
  navDisplay = 'none';

  constructor(private repository: PcRepository) { }

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

      this.repository.getPieChartConfig()
      .subscribe(data => this.pieChartConfig = data);

    this.repository.getShareConfig()
      .subscribe(data => this.sharedConfig = data);
  }
}