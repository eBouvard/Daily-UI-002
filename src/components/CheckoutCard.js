import React from 'react';
import database from '../mock/db';
import store from '../mock/store';

const db = database.getData("test");

function getUnit(type) {
  return db[type].unit != null ? " " + db[type].unit + " of " : " ";
}

function getSubTotal(article) {
  return (db[article.type].price * article.quantity).toLocaleString(
    undefined,
    { style: "currency", currency: "EUR" }
  );
}

class CartContent extends React.Component {
  render() {
    return (
      <div class="cart-content">
        <ul>
          {this.props.cart.map((article) => (
            <li>
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

function CartTotal(props) {
  return (
    <div class="cart-total">
      {"Total: "}
      {props.total.toLocaleString(undefined, {
        style: "currency",
        currency: "EUR"
      })}
    </div>
  );
}

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
    this.state.fields.map((field) => console.log(field.id));
    return (
      <div className="payment-informations">
        {this.state.fields.map((field) => (
          <div id={field.id}>
            <input
              type="text"
              id={field.id + "_input"}
              required
            ></input>
            <label for={field.id + "_input"}>{field.label}</label>
          </div>
        ))}
      </div>
    );
  }
}

class CheckoutCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: store.cart
    };
  }

  render() {
    let total = 0.0;
    this.state.cart.map(
      (article) => (total += db[article.type].price * article.quantity)
    );
    return (
      <div className="card">
        <div className="card-body">
          <h1>CHECKOUT</h1>
          <div className="v-spacer"></div>
          <div className="cart">
            <CartContent cart={this.state.cart} />
            <CartTotal total={total} />
          </div>
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