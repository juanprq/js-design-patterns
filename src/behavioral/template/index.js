const Chase = require('./Chase');
const bank = new Chase();

const ACCOUNT_NAME = 'John Dow';

bank.createAccount(ACCOUNT_NAME, 1000);
bank.credit(ACCOUNT_NAME, 500);
bank.debit(ACCOUNT_NAME, 250);
bank.view(ACCOUNT_NAME);
