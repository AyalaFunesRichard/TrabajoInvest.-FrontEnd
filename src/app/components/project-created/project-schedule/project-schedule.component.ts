import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Models
import { Cronograma } from 'src/app/models/Cronograma';
// Services
import { RestService } from '../../../services/api/rest.service';
import { ScriptControllerService } from 'src/app/services/script-controller.service'; // TODO parece q no se va a usar

// Function declare to reload
declare function disableNewActivity(): any; 
declare function updateChartHeight(newHeight): any; 

@Component({
  selector: 'app-project-schedule',
  templateUrl: './project-schedule.component.html',
  styleUrls: ['./project-schedule.component.css'],
})
export class ProjectScheduleComponent implements OnInit {
  chart: any;
  lstTableData: any[] = [];
  lstChartData: any[] = [];

  chartHeight:number = 800;

  activityList: Cronograma[];

  ngOnInit(): void {}

  // * CONSTRUCTOR ->
  constructor(
    private _restService: RestService,
    public _router: Router,
    public _location: Location // private _loadScript: ScriptControllerService
  ) {
    // Get activities from project
    this.getProjectData();

    this.chart = {
      title: 'Proy - Impulsa 2021',
      data: [],
      type: 'Gantt',
      columnNames: this.getChart_Columns(),
      options: this.getChart_Config(),
    };


    //_loadScript.LoadScript(['google-chart/google-chart']);

    // UpdateColors();
  }

  // * FUNCTIONS ->
  // private createGoogleChart(){
  //   this.chart = {
  //     title: 'Proy - Impulsa 2021',
  //     data: [],
  //     type: 'Gantt',
  //     columnNames: this.getChart_Columns(),
  //     options: this.getChart_Config(),
  //   };
  // }

  public postActivity(data) {
    if (data.id == null || data.id == '') {
      alert('Debe registrar el ID');
      return;
    }
    if (data.nombre == null || data.nombre == '') {
      alert('Debe registrar el nombre de la actividad');
      return;
    }

    let respo: string = this.verifyField(data.responsable, '-');
    let previa: string = this.verifyField(data.previa, 'null');
    let inicio: string = this.transfor_date_toString(data.inicio);
    let fin: string = this.transfor_date_toString(data.fin);
    let presu: string = this.verifyField(data.presupuesto, '0');
    let compl: string = this.verifyField(data.completado, '0');

    let newAux = new Cronograma(
      data.id,
      data.nombre,
      respo,
      previa,
      inicio,
      fin,
      presu,
      compl,
      this.daysToMilliseconds(1) + ''
    );

    // console.log(newAux);

    // Fields validation
    this._restService.PostActivity(newAux).subscribe((value) => {
      alert('Actividad registrada');
      disableNewActivity();      
    });

    // TODO: falta llamar la funcion alternar inputs
  }

  public getProjectData() {
    this._restService.GetActivities().subscribe((response) => {
      // Recover data
      this.activityList = response;
      // console.log(this.activityList);

      this.update_ChartAndTable();

      // this.chart.data = this.update_ChartTable_value();
    });
  }

  public update_ChartAndTable(): void {
    // let i = 0;

    this.activityList.forEach((element) => {
      // Parse data to be used in the // * Google-Chart
      this.lstChartData.push([
        element['id_Cronograma'] + '', // Task ID
        this.verifyField(element['nombre_Tarea'], '-'), // Task Name
        'def', // Resources
        this.transfor_str_toDate(element['fecha_Inicio']), // Start Date
        this.transfor_str_toDate(element['fecha_Fin']), // End Date
        this.daysToMilliseconds(Number(element['duracion'])), //Duration
        Number(element['completado']), //Percent Complete
        this.verifyField(element['actividades_Previa'], 'null'), // Dependencies
      ]);

      // Update projectData, used in // * html > table
      this.lstTableData.push([
        element['id_Cronograma'], // Task ID
        element['nombre_Tarea'], // Nombre de la tarea
        this.verifyField(element['responsable'] + '', '-'), // Responsable
        this.verifyField(element['actividades_Previa'], '-'), // Dependencies
        element['fecha_Inicio'], // Start Date
        element['fecha_Fin'], // End Date
        element['presupuesto'], // Presupuesto
        Number(element['completado']), //Percent Complete
      ]);
      // i++;
    });

    this.chart.data = this.lstChartData;

    // * Resize the gantt height
    let newHeight = this.chart.options.gantt.trackHeight * this.chart.data.length + 50;
    updateChartHeight(newHeight);
  }

  getChart_Columns() {
    return [
      ['string', 'Task ID'],
      ['string', 'Task Name'],
      ['string', 'Resource'],
      ['date', 'Start Date'],
      ['date', 'End Date'],
      ['number', 'Duration'],
      ['number', 'Percent Complete'],
      ['string', 'Dependencies'],
    ];
  }

  getChart_Config() {
    return {
      height: 1950,
      gantt: {
        sortTasks:false,
        labelMaxWidth: 450,
        shadowColor: '#fc0388',
        trackHeight: 50,
        criticalPathEnabled: true,
        criticalPathStyle: {
          stroke: '#e64a19',
          strokeWidth: 5,
        },
        innerGridTrack: { fill: '#dedcdc' },
        innerGridDarkTrack: { fill: '#fff' },
        labelStyle: {
          fontName: '-apple-system, BlinkMacSystemFont, Segoe UI',
          fontSize: 16,
        },
      },
    };
  }

  verifyField(text: string, needed: string) {
    if (text == null) {
      if (needed == 'null') return null;
      return needed;
    }
    if (text.length == 0) {
      if (needed == 'null') return null;
      return needed;
    }
    return text;
    // return text.substring(0, text.length);
  }

  transfor_str_toDate(dateText): Date {
    let splitted = dateText.split(' ', 5);

    let day: number = Number(splitted[0]);

    var month: number;
    switch (splitted[2]) {
      case 'enero':
        month = 0;
        break;
      case 'febrero':
        month = 1;
        break;
      case 'marzo':
        month = 2;
        break;
      case 'abril':
        month = 3;
        break;
      case 'mayo':
        month = 4;
        break;
      case 'junio':
        month = 5;
        break;
      case 'julio':
        month = 6;
        break;
      case 'agosto':
        month = 7;
        break;
      case 'septiembre':
        month = 8;
        break;
      case 'octubre':
        month = 9;
        break;
      case 'noviembre':
        month = 10;
        break;
      case 'diciembre':
        month = 11;
        break;
    }

    let year: number = splitted[4];

    return new Date(year, month, day);
  }

  transfor_date_toString(textDate: string): string {
    // console.log(textDate);

    if (textDate == null || textDate == '') {
      let today: Date = new Date();
      textDate =
        today.getUTCFullYear() +
        '-' +
        (today.getUTCMonth() + 1) +
        '-' +
        today.getUTCDate();
      // console.log('new date : ' + textDate);
    }

    let splitted = textDate.split('-', 3);

    let year: string = Number(splitted[0]) + '';

    var month: string;
    switch (splitted[1]) {
      case '01':
        month = 'enero';
        break;
      case '02':
        month = 'febrero';
        break;
      case '03':
        month = 'marzo';
        break;
      case '04':
        month = 'abril';
        break;
      case '05':
        month = 'mayo';
        break;
      case '06':
        month = 'junio';
        break;
      case '07':
        month = 'julio';
        break;
      case '08':
        month = 'agosto';
        break;
      case '09':
        month = 'septiembre';
        break;
      case '10':
        month = 'octubre';
        break;
      case '11':
        month = 'noviembre';
        break;
      case '12':
        month = 'diciembre';
        break;
    }

    let day: string = splitted[2] + '';

    return day + ' de ' + month + ' de ' + year;
  }

  daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
}
