import '../component/food-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const foodItemElement = document.querySelector("food-list");

    const getData = () => {
        DataSource.getFood()
        .then((result) => (foodItemElement.foods = result));
    };

    getData()
};

export default main;