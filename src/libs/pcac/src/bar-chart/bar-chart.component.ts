import { Component, OnInit, Input, ElementRef, ViewChild, HostListener, SimpleChanges, OnChanges } from '@angular/core';
import { IPcacBarChartConfig } from './bar-chart.model';
import { BarChartBuilder } from './bar-chart.builder';

@Component({
  selector: 'pcac-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  providers: [
    BarChartBuilder
  ]
})
export class PcacBarChartComponent implements OnChanges {
  @Input() config: IPcacBarChartConfig;
  @ViewChild('chart') chartElm: ElementRef;

  constructor(
    private chartBuilder: BarChartBuilder,
  ) { }

  ngOnChanges() {
    if (this.config && this.config.data) {
      this.buildChart();
    }
  }

  buildChart(): void {
    this.chartBuilder.buildChart(this.chartElm);
  }

  // @HostListener('window:resize')
  // resize(): void {
  //   this.buildChart();
  // }
}