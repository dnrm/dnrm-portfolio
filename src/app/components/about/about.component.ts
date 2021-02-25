import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public src: string;
  private connection: boolean = false;

  constructor(
    private title: Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('About Me | danielmedina.dev')
    if (this.connection == true) {
      this.src = 'https://cdn.danielmedina.dev/profile.jpg';
    } else {
      this.src = '../../assets/profile.jpg'
    }
  }

}
