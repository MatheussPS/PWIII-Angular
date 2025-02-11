import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';
  numeros = [2, 3]
  resultado = this.soma(this.numeros[0], this.numeros[1])
  
  soma(a: number, b: number): number {
  return a + b;
}
}

