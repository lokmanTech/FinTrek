document.addEventListener('DOMContentLoaded', () => {
    displayTransactions();
    displayAnalysis();
});

document.getElementById('transactionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const transaction = {
        id: Date.now().toString(),
        type,
        category,
        date: new Date().toLocaleDateString('en-GB'),
        amount
    };

    saveTransaction(transaction);
    displayTransactions();
    displayAnalysis();
});

function saveTransaction(transaction) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function getTransactions() {
    return JSON.parse(localStorage.getItem('transactions')) || [];
}

function displayTransactions() {
    const transactions = getTransactions();
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.innerHTML = `
            <span>${transaction.date}: ${transaction.type} - ${transaction.category} - RM ${transaction.amount.toFixed(2)}</span>
            <button onclick="deleteTransaction('${transaction.id}')">Delete</button>
        `;
        transactionList.appendChild(transactionItem);
    });
}

function deleteTransaction(id) {
    let transactions = getTransactions();
    transactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    displayTransactions();
    displayAnalysis();
}

function toggleCategoryOptions() {
    const type = document.getElementById('type').value;
    const categorySelect = document.getElementById('category');
    categorySelect.innerHTML = '';

    let categories = [];
    if (type === 'income') {
        categories = ['Salary', 'Freelance', 'Investments', 'Other'];
    } else if (type === 'expense') {
        categories = ['Groceries', 'Rent', 'Utilities', 'Transportation', 'Entertainment', 'Other'];
    } else if (type === 'saving') {
        categories = ['Unit Trust', 'Fixed Deposit', 'Gold'];
    }

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function displayAnalysis() {
    const transactions = getTransactions();
    let income = 0;
    let expenses = 0;
    let totalSavings = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            income += transaction.amount;
        } else if (transaction.type === 'expense') {
            expenses += transaction.amount;
        } else if (transaction.type === 'saving') {
            totalSavings += transaction.amount;
        }
    });

    const needsExpenses = ['Groceries', 'Rent', 'Utilities'];
    const wantsExpenses = ['Transportation', 'Entertainment', 'Other'];
    const savingsExpenses = ['Unit Trust', 'Fixed Deposit', 'Gold'];

    const needsTotal = transactions.filter(transaction => needsExpenses.includes(transaction.category))
                                    .reduce((total, transaction) => total + transaction.amount, 0);
    const wantsTotal = transactions.filter(transaction => wantsExpenses.includes(transaction.category))
                                    .reduce((total, transaction) => total + transaction.amount, 0);
    const savingsTotal = transactions.filter(transaction => savingsExpenses.includes(transaction.category))
                                    .reduce((total, transaction) => total + transaction.amount, 0);

    const needsBudget = income * 0.5;
    const wantsBudget = income * 0.3;
    const savingsBudget = income * 0.2;

    const needsUsage = (needsTotal / needsBudget) * 100;
    const wantsUsage = (wantsTotal / wantsBudget) * 100;
    const savingsUsage = (savingsTotal / savingsBudget) * 100;

    const totalBalance = income - expenses - totalSavings;

    const budgetSummaryElement = document.getElementById('budgetSummary');
    budgetSummaryElement.innerHTML = `
        <p>50% Needs: You have used ${needsUsage.toFixed(2)}%, you have a balance of RM ${(needsBudget - needsTotal).toFixed(2)}</p>
        <p>30% Wants: You have used ${wantsUsage.toFixed(2)}%, you have a balance of RM ${(wantsBudget - wantsTotal).toFixed(2)}</p>
        <p>20% Savings: Your savings currently at ${savingsUsage.toFixed(2)}% from the allocated budget</p>
    `;

    document.getElementById('totalIncome').textContent = `RM ${income.toFixed(2)}`;
    document.getElementById('totalExpenses').textContent = `RM ${expenses.toFixed(2)}`;
    document.getElementById('savings').textContent = `RM ${totalSavings.toFixed(2)}`;
    document.getElementById('totalBalance').textContent = `RM ${totalBalance.toFixed(2)}`;

    const ratio = (income - expenses) / expenses;
    const ratioElement = document.getElementById('ratio');
    ratioElement.textContent = `Ratio: ${(ratio * 100).toFixed(2)}%`;
    ratioElement.style.color = ratio >= 0 ? '#5cb85c' : '#d9534f';

    // Generate pie charts
    const incomeChart = new ApexCharts(document.getElementById('incomeChart'), {
        series: [income, expenses, totalSavings],
        labels: ['Income', 'Expenses', 'Savings'],
        chart: {
            type: 'donut',
        },
        colors: ['#5cb85c', '#d9534f', '#f0ad4e']
    });
    incomeChart.render();
}

function filterTransactions() {
    const filterType = document.getElementById('transactionFilter').value;
    const transactions = getTransactions();
    const filteredTransactions = (filterType === 'all') ? transactions : transactions.filter(transaction => transaction.type === filterType);
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    filteredTransactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.innerHTML = `
            <span>${transaction.date}: ${transaction.type} - ${transaction.category} - RM ${transaction.amount.toFixed(2)}</span>
            <button onclick="deleteTransaction('${transaction.id}')">Delete</button>
        `;
        transactionList.appendChild(transactionItem);
    });
}
