import React from 'react';

class PaymentInformations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                { id: "card_number", label: "Card number", max_length: 19 },
                { id: "expiration_date", label: "MM/AA", max_length: 5 },
                { id: "cvv", label: "CVV", max_length: 3 },
                { id: "cardholder_name", label: "Cardholder name", max_length: 26 }
            ]
        };
    }

    handleCardInput = (e) => (e.target.value = e.target.value
        .replace(/(\d{4})(?! )/g, '$& ').trim());

    render() {
        return (
            <div className="payment-informations">
                {this.state.fields.map((field, key) => (
                    <div key={key}
                        id={field.id}>
                        <input
                            type="text"
                            id={field.id + "_input"}
                            onInput={(field.id === 'card_number') ? this.handleCardInput : undefined}
                            maxLength={field.max_length}
                            required
                        ></input>
                        <label htmlFor={field.id + "_input"}>{field.label}</label>
                    </div>
                ))}
            </div>
        );
    }
}

export default PaymentInformations;