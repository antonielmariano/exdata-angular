import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = "light"

  constructor() { }

  changeTheme(){
    if(this.theme === "light"){
      this.theme ="dark"
    }else{
      this.theme = "light"
    }
  }
}
