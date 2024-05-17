document.getElementById('transactionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const date = new Date().toLocaleDateString('en-GB'); // Get current date in dd/mm/yyyy format
    const amount = parseFloat(document.getElementById('amount').value.replace(/[^0-9.]/g, ''));

    const transaction = {
        id: Date.now().toString(),
        type,
        category,
        date,
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

    const categories = (type === 'income') ? incomeCategories : (type === 'saving' ? savingsCategories : expenseCategories);

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

const incomeCategories = ['Salary', 'Freelance', 'Investments', 'Other'];
const expenseCategories = ['Groceries', 'Rent', 'Utilities', 'Transportation', 'Entertainment', 'Healthcare', 'Other'];
const savingsCategories = ['Gold', 'Unit Trust', 'Fixed Deposit'];

function displayAnalysis() {
    const transactions = getTransactions();
    let income = 0;
    let expenses = 0;
    let savings = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            income += transaction.amount;
        } else if (transaction.type === 'expense') {
            expenses += transaction.amount;
        } else if (transaction.type === 'saving') {
            savings += transaction.amount;
        }
    });

    const needsBudget = income * 0.5; // 50% for needs
    const wantsBudget = income * 0.3; // 30% for wants
    const savingsBudget = income * 0.2; // 20% for savings

    const needsExpenses = expenses; // Expenses categorized as needs
    const wantsExpenses = (expenses / income) * wantsBudget; // Expenses categorized as wants
    const savingsExpenses = savings; // Expenses categorized as savings

    const needsUsage = (needsExpenses / needsBudget) * 100;
    const wantsUsage = (wantsExpenses / wantsBudget) * 100;
    const savingsUsage = (savingsExpenses / savingsBudget) * 100;

    const totalBalance = income - expenses - savings;

    const budgetSummaryElement = document.getElementById('budgetSummary');
    budgetSummaryElement.innerHTML = `
        <p>50% Needs: You have used ${needsUsage.toFixed(2)}%, you have a balance of RM ${(needsBudget - needsExpenses).toFixed(2)}</p>
        <p>30% Wants: You have used ${wantsUsage.toFixed(2)}%, you have a balance of RM ${(wantsBudget - wantsExpenses).toFixed(2)}</p>
        <p>20% Savings: Your savings currently at ${(savingsUsage.toFixed(2))}% from the allocated budget</p>
    `;

    const totalIncomeElement = document.getElementById('totalIncome');
    totalIncomeElement.textContent = `RM ${income.toFixed(2)}`;

    const savingsElement = document.getElementById('savings');
    savingsElement.textContent = `RM ${savings.toFixed(2)}`;

    const totalExpensesElement = document.getElementById('totalExpenses');
    totalExpensesElement.textContent = `RM ${expenses.toFixed(2)}`;

    const totalBalanceElement = document.getElementById('totalBalance');
    totalBalanceElement.textContent = `RM ${totalBalance.toFixed(2)}`;

    const ratio = (income - expenses) / expenses;
    const ratioElement = document.getElementById('ratio');
    ratioElement.textContent = `Ratio: ${(ratio * 100).toFixed(2)}%`;
    if (ratio >= 0) {
        ratioElement.style.color = '#5cb85c'; // Green for positive ratio
    } else {
        ratioElement.style.color = '#d9534f'; // Red for negative ratio
    }

    // Display pie charts
    const incomeChart = new ApexCharts(document.getElementById('incomeChart'), {
        series: [income, expenses],
        labels: ['Income', 'Expenses'],
        chart: {
            type: 'pie',
        },
        colors: ['#5cb85c', '#d9534f']
    });
    incomeChart.render();
}

// Call displayTransactions and displayAnalysis on page load
document.addEventListener('DOMContentLoaded', () => {
    displayTransactions();
    displayAnalysis();
});

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

