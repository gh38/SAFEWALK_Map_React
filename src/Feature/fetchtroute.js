const start_x = 14375711.015528526;// 임의 설정
const start_y = 4186830.8005807116;
const arrive_x = 14377896.418793784;
const arrive_y = 4186139.5593404584;

fetch('https://safewalk-safewalk.koyeb.app/calculate_route', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        start_point: [start_x, start_y],
        arrive_point: [arrive_x, arrive_y]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.route1);
    console.log(data.route2);
    console.log(data.time1);
    console.log(data.time2); 
  })
  .catch(error => {
    console.error('Error:', error);
  });
