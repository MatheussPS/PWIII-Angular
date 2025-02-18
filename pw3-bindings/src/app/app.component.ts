import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hello World!';
  booleano: boolean = false;
  favicon = "favicon.ico";

  alertar(){
    alert("Hoje esta muito quente, beba água!")
  }

  changeHiddenText(){
    this.booleano = !this.booleano
  }

}

