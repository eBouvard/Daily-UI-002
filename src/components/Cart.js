import React from 'react';
import database from '../mock/db';

function getUnit(type) {
    const element = database.getData(type);
    return element.unit != null ? " " + element.unit + " of " : " ";
}

function getSubTotal(article) {
    return (database.getData(article.type).price * article.quantity).toLocaleString(
        undefined,
        { style: "currency", currency: "EUR" }
    );
}

class CartContent extends React.Component {
    render() {
        return (
            <div className="cart-content">
                <ul>
                    {this.props.cart.map((article, key) => (
                        <li key={key}>
                            {article.quantity +
                                getUnit(article.type) +
                                article.type}
                            {" - "}
                            {getSubTotal(article)}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class CartTotal extends React.Component {
    render() {
        let total = 0.0;
        this.props.cart.map(
            (article) => (total += database.getData(article.type).price * article.quantity)
        );

        return (
            <div className="cart-total">
                {"Total: "}
                {total.toLocaleString(undefined, {
                    style: "currency",
                    currency: "EUR"
                })}
            </div>
        );
    }
}

function Cart(props) {
    return (
        <div className="cart">
            <CartContent cart={props.cart} />
            <CartTotal cart={props.cart} />
        </div>
    );
}

export default Cart;