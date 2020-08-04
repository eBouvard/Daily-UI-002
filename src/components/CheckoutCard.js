import React from 'react';
import PaymentInformations from './PaymentInformations';
import Cart from './Cart';
import store from '../mock/store';

class CheckoutCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: store.cart
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h1>CHECKOUT</h1>
                    <div className="v-spacer"></div>
                    <Cart cart={ this.state.cart }/>
                    <div className="v-spacer"></div>
                    <PaymentInformations />
                </div>
                <div className="card-bottom">
                    <div className="fab">BUY</div>
                </div>
            </div>
        );
    }
}

export default CheckoutCard;