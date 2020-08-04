/*
let db = [
  {type:"apples", unit: "kg", price: 2.3 },
  {type:"watermelons", unit: null, price: 5.0 },
  {type:"lemons", unit: null, price: 0.7 }
];
*/
let db = {
    apples: {
        unit: "kg",
        price: 2.3
    },
    watermelons: {
        unit: null,
        price: 5.0
    },
    lemons: {
        unit: null,
        price: 0.7
    }
};

function getData(type) {
    return db;
}

function addData(data) {

}

export default {
    getData,
    addData
};