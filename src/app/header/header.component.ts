import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    iconName = "brightness_4"
    pathLogo = "../../assets/img/logo-white.svg"

    constructor(private theme: ThemeService){}

    changeIcon(){
        if(this.iconName === "brightness_7"){
            this.iconName="brightness_4"
            this.pathLogo = "../../assets/img/logo-white.svg"
            this.theme.changeTheme()

        }else{
            this.iconName="brightness_7"
            this.pathLogo = "../../assets/img/logo-dark.svg"
            this.theme.changeTheme()
        }
    }

    changePathImage(){
        
    }

    get actualTheme(){
        return this.theme.theme
    }
}
