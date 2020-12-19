import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public src: string;
  private connection: boolean = false;

  constructor() {
    if (this.connection == true) {
      this.src = 'https://dannermm.s3.us-east-1.amazonaws.com/profile.jpg';
    } else {
      this.src = '../../assets/profile.jpg'
    }
  }

  ngOnInit(): void {}

}
