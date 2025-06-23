import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expense } from '../../models/expense.model';

@Component({
    selector: 'expense-summary',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './expense-summary.component.html',
})
export class ExpenseSummaryComponent {
    @Input() expenses: Expense[] = [];

    get total() {
        return this.expenses.reduce((sum, e) => sum + e.amount, 0);
    }

    get categories() {
        return [...new Set(this.expenses.map(e => e.category))];
    }

    getTotalByCategory(category: string) {
        return this.expenses.filter(e => e.category === category).reduce((sum, e) => sum + e.amount, 0);
    }
}
