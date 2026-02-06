import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-header',
  imports: [Navbar,Menu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
