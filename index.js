 async function Ready() {
   let url = await fetch("https://api.covid19india.org/data.json")
   const data = await url.json()
//    console.log(data)

   let total_active, total_recovered, total_deaths, total_confirmed;

   let state = [];
   let confirmed = [];
   let recovered = [];
   let deaths = [];

  Array.prototype.forEach.call(data.statewise, function (id, obj) {
    state.push(id.state);
    confirmed.push(id.confirmed);
    recovered.push(id.recovered);
    deaths.push(id.deaths);
})

state.shift();
confirmed.shift();
recovered.shift();
deaths.shift();


   total_active = data.statewise[0].active
   total_confirmed = data.statewise[0].confirmed
   total_recovered = data.statewise[0].recovered
   total_deaths = data.statewise[0].deaths


  let activeData = document.querySelectorAll('#active');
   activeData[0].append(total_active);

  let confirmedData = document.querySelectorAll('#confirmed');
   confirmedData[0].append(total_confirmed);

  let recoveredData = document.querySelectorAll('#recovered');
    recoveredData[0].append(total_recovered);

  let deathData = document.querySelectorAll('#deaths');
   deathData[0].append(total_deaths);

  
  // let confirm = document.querySelector('.text-warning')
  // confirm.addEventListener('click', e => {
  //   console.log('confirmed capture')
  // }, {capture : true})

  // let active  = document.querySelector('.text-success')
  // active.addEventListener('click', e => {
  //   console.log('active capture')
  // }, {capture : true})

  // let recover = document.querySelector('.text-info')
  // recover.addEventListener('click', e => {
  //   console.log('recovered capture')
  // }, {capture : true})

  // let death = document.querySelector('.text-danger')
  // death.addEventListener('click', e => {
  //   console.log('decreased capture')
  // }, {capture : true})

  // let divs = document.querySelectorAll('.row')
  // divs.forEach(div => {
  //   div.addEventListener("click", () => {
  //     console.log('captured') 
  //   })
  // })

  let countEvent;
  document.querySelector('.row').addEventListener("click", function() {
    countEvent = document.getElementById("counting").value;
    countEvent++;
    document.getElementById("counting").value = countEvent;

  })
  document.querySelector('.chart').addEventListener("click", function() {
    countEvent = document.getElementById("counting").value;
    countEvent++;
    document.getElementById("counting").value = countEvent;

  })

   let myChart = document.getElementById('myChart').getContext('2d');
   let chart = new Chart(myChart, {
       type: 'bar',
       data: {
           labels: state,
        datasets: [
          {
            label: 'Confirmed Cases',
            data: confirmed,
            backgroundColor: '#f1c40f',
            minBarLength: 100
          },
        {
            label: 'Recovered Cases',
            data: recovered,
            backgroundColor: '#2ecc71',
            minBarLength: 100

        },
    {
        label: 'Death Cases',
        data: deaths,
        backgroundColor: '#e74c3c',
        minBarLength: 100
    }]
       },
       options: {}
   })
}


// let chart = document.querySelector('.chart')
// chart.addEventListener('click', e => {
//   console.log('chart capture')
// }, {capture : true})



Ready()

       