import { Component } from '@angular/core';
import { PcService } from '../../../../../services/pc.service';
import { IPcacData } from '@pioneer-code/pioneer-charts';
import { IJumpNav } from '../../../../layouts/doc/doc.component';

@Component({
  selector: 'pc-line-area-chart',
  templateUrl: './line-area-chart.component.html',
  styleUrls: ['./line-area-chart.component.scss']
})
export class LineAreaChartComponent {
  jumpNav = [
    {
      key: 'Markup',
      value: 'markup',
    },
    {
      key: 'API',
      value: 'api',
      jump: [
        {
          key: 'Configuration',
          value: 'configuration',
        }
      ]
    }
  ] as IJumpNav[];
  markupCode = `<pcac-line-area-chart [config]="pcacService.lineChartConfig"></pcac-line-area-chart>`;
  importCode = `import { PcacLineAreaChartModule } from '@pioneer-code/pioneer-charts';`;
  constructor(public pcacService: PcService) { }

  getConfig() {
    const rows = [
      {
        'data': [
          {
            'value': 'Name'
          },
          {
            'value': 'Description'
          }
        ]
      },
      {
        'data': [
          {
            'value': 'domainMax'
          },
          {
            'value': 'Max value in data-set domain.'
          }
        ]
      }
    ] as IPcacData[];
    return {
      'data': rows.concat(this.pcacService.sharedConfig || [])
    };
  }
}

