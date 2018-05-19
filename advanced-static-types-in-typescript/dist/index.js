"use strict";
function tryParseInt(text) {
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
function stringifyPaymentMethod(method) {
    switch (method.kind) {
        case 'cash':
            return 'Cash';
        case 'paypal':
            return "PayPal (" + method.email + ")";
        case 'creditcard':
            return "Credit Card (*" + method.cardNumber.slice(-4) + ")";
        default:
            return 'Unknown method';
    }
}
