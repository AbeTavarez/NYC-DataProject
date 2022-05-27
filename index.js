//* BUTTONS
const manBtn = document.getElementById('manhattan')
const bxBtn = document.getElementById('bronx')
const bkBtn = document.getElementById('brooklyn')
const qnsBtn = document.getElementById('queens')
const stIndBtn = document.getElementById('staten-island')

//* input
const input = document.querySelector('input')

// fetch data from API
const getData = (e) => {
    const numComplaints = input.value || 10
    const borough = e.target.id.toUpperCase()
    // fetch data
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${numComplaints}&agency=NYPD&borough=${borough}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

manBtn.addEventListener('click', getData)
bxBtn.addEventListener('click', getData)
bkBtn.addEventListener('click', getData)
qnsBtn.addEventListener('click', getData)
stIndBtn.addEventListener('click', getData)