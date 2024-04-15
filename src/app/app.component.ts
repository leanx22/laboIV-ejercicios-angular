import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraComponent/*, FormModule */],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase_1';
}
