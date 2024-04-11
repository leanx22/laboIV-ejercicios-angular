import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'clase_1';
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
