import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Expense } from '../../models/expense.model';

@Component({
    selector: 'expense-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './expense-form.component.html',
})
export class ExpenseFormComponent {
    @Input() expense: Expense = { id: 0, description: '', amount: 0, category: '', date: '' };
    @Input() editing = false;
    @Output() save = new EventEmitter<Expense>();
    @Output() cancel = new EventEmitter<void>();

    onSubmit() {
        this.save.emit(this.expense);
        this.expense = { id: 0, description: '', amount: 0, category: '', date: '' };
        this.editing = false;
    }

    cancelEdit() {
        this.cancel.emit();
        this.editing = false;
    }
}
