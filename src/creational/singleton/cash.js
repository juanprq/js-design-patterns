let cash = 0;

const CashRegister = {
  credit(amount) {
    cash += amount;
    return cash;
  },
  debit(amount) {
    if (amount <= cash) {
      cash -= amount;
      return true;
    }

    return false;
  },
  total() {
    return cash;
  },
};

module.exports = CashRegister;
