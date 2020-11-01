import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('name') name: string;
  @Input('srcUrl') srcUrl: string;
  @Input('description') description: string;

}
