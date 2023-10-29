import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  average: number = 0;

  getSeriesList(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    })
    return dataSeries;
  }

  getAverageSeries(){
    let length = 0;
    let sum = 0;
    this.serieService.getSeries().subscribe(series =>{
      length = series.length;
      series.forEach(serie => {
        sum += serie.seasons;
      });
      this.average = sum/length;
    });
  }

  ngOnInit() {
    this.getSeriesList();
    this.getAverageSeries();
  }

}
