import { NgModule } from '@angular/core';
import { PcacLineAreaChartComponent } from './line-area-chart.component';
import { PcacCoreModule } from '../core';

@NgModule({
  exports: [
    PcacLineAreaChartComponent
  ],
  declarations: [
    PcacLineAreaChartComponent
  ],
  imports: [
    PcacCoreModule
  ]
})
export class PcacLineAreaChartModule { }