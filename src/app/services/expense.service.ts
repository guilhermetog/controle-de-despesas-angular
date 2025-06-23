// Serviço para gerenciar despesas
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
    private expenses: Expense[] = [];
    private nextId = 1;

    constructor() {
        this.loadFromStorage();
    }

    getAll(): Expense[] {
        return [...this.expenses];
    }

    add(expense: Omit<Expense, 'id'>): Expense {
        const newExpense: Expense = { ...expense, id: this.nextId++ };
        this.expenses.push(newExpense);
        this.saveToStorage();
        return newExpense;
    }

    remove(id: number): void {
        this.expenses = this.expenses.filter(e => e.id !== id);
        this.saveToStorage();
    }

    update(updated: Expense): void {
        const idx = this.expenses.findIndex(e => e.id === updated.id);
        if (idx !== -1) this.expenses[idx] = updated;
        this.saveToStorage();
    }

    private saveToStorage() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
        localStorage.setItem('nextId', this.nextId.toString());
    }

    private loadFromStorage() {
        const data = localStorage.getItem('expenses');
        const nextId = localStorage.getItem('nextId');
        if (data) this.expenses = JSON.parse(data);
        if (nextId) this.nextId = +nextId;
    }
}
