import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './theme.scss']
})
export class AppComponent {
  title = 'exdata';

  constructor(private theme: ThemeService){}

  get actualTheme(){
    return this.theme.theme
}
}
