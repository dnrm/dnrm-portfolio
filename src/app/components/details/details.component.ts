import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [RequestsService]
})
export class DetailsComponent implements OnInit {

  @Input() img: string;

  public routeParams: any;
  public user: any;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private requestsService: RequestsService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Daniel Medina | danielmedina.dev');
    this.route.params.subscribe(
      response => {
        this.routeParams = response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
