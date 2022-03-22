import './food-item.js'

class FoodList extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._foods.forEach(food => {
            const foodItemElement = document.createElement("food-item");
            foodItemElement.food = food;
            this.shadowDOM.appendChild(foodItemElement);
        })
    }
}

customElements.define("food-list", FoodList)