import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  respuesta = 0;
  protected num1: number = 0;
  protected num2: number = 0;

  public Suma()
  {
    this.respuesta =  this.num1 + this.num2; 
  }

  public Promedio()
  {
    this.respuesta =  (this.num1 + this.num2) / 2;
  }
}
