import { Component } from '@angular/core';
import { HeaderComponent } from '@components/portofolio-web/header/header.component';
import { BannerComponent } from '@components/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '@components/portofolio-web/header-menu/header-menu.component';
@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent
  ],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.css'
})
export class PortfolioWebComponent {

}
