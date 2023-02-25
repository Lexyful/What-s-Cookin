
const fetchData = (url) => {
   return fetch(url)
    .then(response => response.json())
}

const fetchAll = () => {
   return Promise.all([
    fetchData("http://localhost:3001/api/v1/users"),
    fetchData("http://localhost:3001/api/v1/ingredients"),
    fetchData("http://localhost:3001/api/v1/recipes")
])
}
    export default fetchAll
