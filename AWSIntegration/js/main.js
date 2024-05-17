// Import AWS SDK
import AWS from 'aws-sdk';

// AWS configuration
AWS.config.update({
    region: 'us-east-1', // Update to your region
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'YOUR_IDENTITY_POOL_ID' // Update to your identity pool id
    })
});

const docClient = new AWS.DynamoDB.DocumentClient();

document.getElementById('transactionForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const transaction = {
        id: Date.now().toString(),
        type,
        category,
        amount
    };

    try {
        await saveTransaction(transaction);
        displayTransactions();
        displayAnalysis();
    } catch (error) {
        console.error('Failed to save transaction', error);
    }
});

async function saveTransaction(transaction) {
    const params = {
        TableName: 'Transactions', // Your DynamoDB table name
        Item: transaction
    };
    return docClient.put(params).promise();
}

async function getTransactions() {
    const params = {
        TableName: 'Transactions'
    };
    const data = await docClient.scan(params).promise();
    return data.Items;
}

async function displayTransactions() {
    const transactions = await getTransactions();
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.textContent = `${transaction.type}: ${transaction.category} - $${transaction.amount}`;
        transactionList.appendChild(transactionItem);
    });
}

async function displayAnalysis() {
    const transactions = await getTransactions();
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            income += transaction.amount;
        } else if (transaction.type === 'expense') {
            expenses += transaction.amount;
        }
    });

    const analysis = document.getElementById('analysis');
    analysis.innerHTML = `
        <p>Total Income: $${income}</p>
        <p>Total Expenses: $${expenses}</p>
        <p>Net Savings: $${income - expenses}</p>
    `;
}

// Call displayTransactions and displayAnalysis on page load
document.addEventListener('DOMContentLoaded', () => {
    displayTransactions();
    displayAnalysis();
});
