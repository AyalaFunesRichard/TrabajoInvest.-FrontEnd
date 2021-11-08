import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent implements OnInit {

  public projectList: string[]; 

  constructor() {
      // this.projectList = ['Proy - Impulsa 2021'];
      this.projectList = ['Desarrollo Avanzado 2022', 'Proy - Impulsa 2021', 'Educa Millenium 2022'];
   }

  ngOnInit(): void {
  }

}
