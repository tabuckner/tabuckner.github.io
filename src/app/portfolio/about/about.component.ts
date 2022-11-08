import { Component, OnInit } from '@angular/core';
import { ABOUT_ITEMS } from '../../core/constants/about-items';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutItems: Array<string> = [...ABOUT_ITEMS];

  constructor() { }

  ngOnInit(): void {
  }

}
