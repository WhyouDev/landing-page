import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  gotoDiv(page:string){

  }
}
