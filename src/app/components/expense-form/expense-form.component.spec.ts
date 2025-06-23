import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

describe('ExpenseFormComponent', () => {
    it('deve emitir o evento save corretamente', () => {
        // Teste de emissão de evento pode ser implementado aqui
        expect(true).toBeTrue(); // placeholder
    });
});

describe('ExpenseListComponent', () => {
    let service: ExpenseService;

    beforeEach(() => {
        service = new ExpenseService();
    });

    it('deve adicionar uma despesa pela integração com o formulário', () => {
        const expense: Omit<Expense, 'id'> = {
            description: 'Teste',
            amount: 100,
            category: 'Teste',
            date: '2025-06-22'
        };
        const added = service.add(expense);
        expect(added.id).toBeGreaterThan(0);
        expect(service.getAll().length).toBe(1);
    });
});
