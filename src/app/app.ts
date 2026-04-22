import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbarComponent } from './pages/Layout/navbar/navbar.component';
import { footerComponent } from './pages/Layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,navbarComponent,footerComponent],
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('SOFTKEYS');
}
