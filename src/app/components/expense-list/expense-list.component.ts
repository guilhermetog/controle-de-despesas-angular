import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { ExpenseSummaryComponent } from '../expense-summary/expense-summary.component';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
    selector: 'expense-list',
    standalone: true,
    imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, ExpenseFormComponent, ExpenseSummaryComponent],
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {
    expenses: Expense[] = [];
    editingExpense: Expense | null = null;

    filterCategory = '';
    filterDate = '';

    constructor(private expenseService: ExpenseService) {
        this.loadExpenses();
    }

    loadExpenses() {
        this.expenses = this.expenseService.getAll();
    }

    remove(id: number) {
        this.expenseService.remove(id);
        this.loadExpenses();
    }

    startEdit(expense: Expense) {
        this.editingExpense = { ...expense };
    }

    saveExpense(expense: Expense) {
        if (expense.id) {
            this.expenseService.update(expense);
        } else {
            this.expenseService.add(expense);
        }
        this.editingExpense = null;
        this.loadExpenses();
    }

    cancelEdit() {
        this.editingExpense = null;
    }

    get filteredExpenses() {
        return this.expenses.filter(e =>
            (!this.filterCategory || e.category === this.filterCategory) &&
            (!this.filterDate || e.date === this.filterDate)
        );
    }
}
