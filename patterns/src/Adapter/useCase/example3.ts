interface PaymentProcessorI {
    pay(amountInCents: number): Promise<void>;
}

class PaypalPayment {
    makePayment(amount: number): void {}
}

class StripePayment {
    charge(cents: number): void {}
}

class BankSlipPayment {
    generateBoleto(value: number): void {}
}

class PaypalPaymentAdapter implements PaymentProcessorI {

    constructor(private paypalPayment: PaypalPayment) {}

    async pay(amountInCents: number) {
        // Do some other calculation
        return this.paypalPayment.makePayment(amountInCents);
    }
}

class Cart {
    async pay(paymentProcessor: PaymentProcessorI, amount: number) {
        return await paymentProcessor.pay(amount);
    }
}


