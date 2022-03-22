class DataSource {
    static getFood() {
        return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.categories) {
                return Promise.resolve(responseJson.categories);
            } else {
                return Promise.reject(`Categories is not found!`)
            }
        });
    }
}

export default DataSource;