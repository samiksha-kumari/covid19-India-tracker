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


   let myChart = document.getElementById('myChart').getContext('2d');
   let chart = new Chart(myChart, {
       type: 'bar',
       data: {
           labels: state,
        datasets: [{
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
       }
   })
}



Ready()

       