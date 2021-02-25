import { Component, OnInit } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { ProjectComponent } from '../project/project.component';
import { Title } from '@angular/platform-browser';

import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    RequestsService
  ]
})
export class MainComponent implements OnInit {

  public data: any;

  constructor(
    private title: Title,
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Daniel Medina | danielmedina.dev');
    this.data = this.requestsService.getProjects('https://reqres.in/api/users').subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.log(error)
      }
    )
  }
}
