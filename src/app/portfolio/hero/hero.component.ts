import { Component, OnInit } from '@angular/core';
import { HERO_TEXT } from '../../core/constants/hero-text';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroText: string = HERO_TEXT;

  constructor() { }

  ngOnInit(): void {
  }

}
