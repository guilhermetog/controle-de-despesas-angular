import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Expense } from '../../models/expense.model';

@Component({
    selector: 'expense-form',
    standalone: true,
    imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './expense-form.component.html',
    styleUrls: ['./expense-form.component.css']
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
