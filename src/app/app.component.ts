import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';
  isHidden: boolean = true;
  clickCounter: number = 0;

  btnClicked(): void {
    this.clickCounter++;
  }

  btnDoubleClicked(): void {
    this.isHidden = !this.isHidden;
  }
}
