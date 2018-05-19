type Result =
  | { success: true, value: number }
  | { success: false, error: string };

function tryParseInt(text: string): Result {
  if (/^-?\d+$/.test(text)) {
      return {
          success: true,
          value: parseInt(text, 10)
      };
  }
  return {
      success: false,
      error: "Invalid number format"
  };
}

// ========================================


interface Cash {
  kind: 'cash';
}

interface PayPal {
  kind: 'paypal';
  email: string;
}

interface CreditCard {
  kind: 'creditcard',
  cardNumber: string;
  securityCode: string;
}

type PaymentMethod = Cash | PayPal | CreditCard;

function stringifyPaymentMethod(method: PaymentMethod): string {
  switch (method.kind) {
    case 'cash':
      return 'Cash';
    case 'paypal':
      return `PayPal (${method.email})`;
    case 'creditcard':
      return `Credit Card (*${method.cardNumber.slice(-4)})`;
    default:
      return 'Unknown method';
  }
}