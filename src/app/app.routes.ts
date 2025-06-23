import { Routes } from '@angular/router';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseSummaryComponent } from './components/expense-summary/expense-summary.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'despesas', pathMatch: 'full' },
    { path: 'despesas', component: ExpenseListComponent },
    { path: 'resumo', component: ExpenseSummaryComponent },
    { path: 'nova', component: ExpenseFormComponent },
    { path: '**', redirectTo: 'despesas' }
];
