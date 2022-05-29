//* ===== BUTTONS
const manBtn = document.getElementById('manhattan')
const bxBtn = document.getElementById('bronx')
const bkBtn = document.getElementById('brooklyn')
const qnsBtn = document.getElementById('queens')
const stIndBtn = document.getElementById('staten-island')

//* ===== INPUT
const input = document.querySelector('input')
//* Container div
const container = document.getElementById('container')

//* ==========> fetch data from API
const getData = (e) => {
    const numComplaints = input.value || 10
    const borough = e.target.id.toUpperCase()
    // fetch data
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${numComplaints}&agency=NYPD&borough=${borough}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderData(data)
    })
    .catch(err => console.error(err))
}

//* DATA RENDER FUNCTION
const renderData = (data) => {
    data.map(item => {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        h4.textContent = item.descriptor
        p.textContent = item.resolution_description
        h4.appendChild(p)
        div.appendChild(h4)
        container.appendChild(div)
    })
}

//* ==========> Listeners
manBtn.addEventListener('click', getData)
bxBtn.addEventListener('click', getData)
bkBtn.addEventListener('click', getData)
qnsBtn.addEventListener('click', getData)
stIndBtn.addEventListener('click', getData)