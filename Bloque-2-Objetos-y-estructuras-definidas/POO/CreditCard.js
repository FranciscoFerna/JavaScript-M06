class CreditCard {
  #cardNumber;
  #pin;
  #expirationDate;
  #cvv;
  #isActive;
  #balance;

  constructor(cardNumber, pin, expirationDate, cvv) {
    this.#cardNumber = cardNumber;
    this.#pin = pin;
    this.#expirationDate = expirationDate;
    this.#cvv = cvv;
    this.#isActive = false;
    this.#balance = 1000; // Initial balance
  }

  activate() {
    this.#isActive = true;
    return 'Card activated successfully';
  }

  deactivate() {
    this.#isActive = false;
    return 'Card deactivated successfully';
  }

  pay(amount, enteredPin) {
    if (!this.#isActive) return 'Card is not active';
    if (enteredPin !== this.#pin) return 'Invalid PIN';
    if (amount > this.#balance) return 'Insufficient funds';

    this.#balance -= amount;
    return `Payment successful. Remaining balance: ${this.#balance}`;
  }

  changePin(oldPin, newPin) {
    if (oldPin !== this.#pin) return 'Invalid current PIN';
    this.#pin = newPin;
    return 'PIN changed successfully';
  }
}

// Creating 3 instances
const card1 = new CreditCard('1234-5678-9012-3456', '1234', '12/25', '123');
const card2 = new CreditCard('9876-5432-1098-7654', '4321', '06/24', '456');
const card3 = new CreditCard('4567-8901-2345-6789', '5678', '03/26', '789');
