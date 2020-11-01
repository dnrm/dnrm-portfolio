import { Component, OnInit } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
