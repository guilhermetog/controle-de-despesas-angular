import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'meu-projeto-angular';
}
