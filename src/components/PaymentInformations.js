import React from 'react';

class PaymentInformations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                { id: "card_number", label: "Card number" },
                { id: "expiration_date", label: "MM/AA" },
                { id: "cvv", label: "CVV" },
                { id: "cardholder_name", label: "Cardholder name" }
            ]
        };
    }

    render() {
        return (
            <div className="payment-informations">
                {this.state.fields.map((field, key) => (
                    <div key={key}
                        id={field.id}>
                        <input
                            type="text"
                            id={field.id + "_input"}
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