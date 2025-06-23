import { Expense } from '../models/expense.model';
import { ExpenseService } from './expense.service';

describe('ExpenseService', () => {
    let service: ExpenseService;

    beforeEach(() => {
        localStorage.clear();
        service = new ExpenseService();
    });

    it('deve adicionar uma despesa', () => {
        const expense: Omit<Expense, 'id'> = {
            description: 'Café',
            amount: 10,
            category: 'Alimentação',
            date: '2025-06-22'
        };
        const added = service.add(expense);
        expect(added.id).toBe(1);
        expect(service.getAll().length).toBe(1);
    });

    it('deve remover uma despesa', () => {
        const expense = service.add({ description: 'Café', amount: 10, category: 'Alimentação', date: '2025-06-22' });
        service.remove(expense.id);
        expect(service.getAll().length).toBe(0);
    });

    it('deve atualizar uma despesa', () => {
        const expense = service.add({ description: 'Café', amount: 10, category: 'Alimentação', date: '2025-06-22' });
        service.update({ ...expense, amount: 20 });
        expect(service.getAll()[0].amount).toBe(20);
    });
});
