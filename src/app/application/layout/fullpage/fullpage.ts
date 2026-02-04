import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../modules/dashboard/header/header';
import { Footer } from '../../modules/dashboard/footer/footer';

@Component({
  selector: 'app-fullpage',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './fullpage.html',
  styleUrl: './fullpage.scss',
})
export class Fullpage {

}
