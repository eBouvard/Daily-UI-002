let db = [{
        type: "apples",
        unit: "kg",
        price: 2.3
    },
    {
        type: "watermelons",
        unit: null,
        price: 5.0
    },
    {
        type: "lemons",
        unit: null,
        price: 0.7
    }
];

function getData(type) {
    return db.find((element) => (element.type === type));
}

export default {
    getData
};