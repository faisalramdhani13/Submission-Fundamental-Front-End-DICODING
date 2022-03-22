class FoodItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .card {
                border: 3px solid black;
                border-radius: 5px;
                margin: 10px 0;
                text-align: center;
                background-color: #ffcc6e;
            }
            .card img {
                border-radius: 5px;
            }
        </style>
        <div class= "card">
                <h2>${this._food.strCategory}</h2>
                <img src= "${this._food.strCategoryThumb}" alt= "Foods">
                <p>${this._food.strCategoryDescription}</p>
        </div>
        `
    }
}

customElements.define("food-item", FoodItem);