// search button script
// index.html
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const searchBar = document.querySelector('#search-bar')

// results.html
const targetElement = document.querySelector('ul')

// important bits
const port = 3000
const source = "allfilms"

btn1.addEventListener('submit',btn1Fetch)
btn2.addEventListener('submit',btn2Fetch)

// Returns 10 results
function btn1Fetch(){
    fetch(`http://localhost:${port}/${source}`)
    .then(response => response.json())
    .then(data => {
        try {        // do something with searchBar.textContent...
        for (let i = 0;i < 10;i++){
            let newLi = document.createElement('li')
            newLi.textContent = data[i]
            targetElement.appendChild(newLi)
        }
    } catch (err) {
        let newLi = document.createElement('li')
        newLi.textContent = "Something when wrong!"
        targetElement.appendChild(newLi)
    }
        console.log(data)
    });
}

// Returns 1 result
function btn2Fetch(){
    fetch(`http://localhost:${port}/${target}`)
    .then(response => response.json())
    .then(data => {
        // do something with searchBar.textContent...
        try {
            let newLi = document.createElement('li')
            newLi.textContent = data[i]
            targetElement.appendChild(newLi)
        }
        catch(err) {
            let newLi = document.createElement('li')
            newLi.textContent = "Something when wrong!"
            targetElement.appendChild(newLi)
        }
        console.log(data)
    });
}
