// search button script
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const searchBar = document.querySelector('#search-bar')

const port = 3000
const target = "movies"

btn1.addEventListener('submit',btn1Fetch)
btn2.addEventListener('submit',btn2Fetch)

// Returns 10 results
function btn1Fetch(){
    fetch(`http://localhost:${port}/${target}`)
    .then(response => response.json())
    .then(data => {
        // do soething with searchBar.textContent...
        console.log(data)
    });
}

// Returns 1 result
function btn2Fetch(){
    fetch(`http://localhost:${port}/${target}`)
    .then(response => response.json())
    .then(data => {
        // do soething with searchBar.textContent...
        console.log(data)
    });
}
