// Modelo de despesa para o aplicativo de controle de gastos
export interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
    date: string; // ISO format (YYYY-MM-DD)
}
