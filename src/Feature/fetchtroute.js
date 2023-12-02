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

  /**
   * 
   * 
   *  // 5. 경로
  
  let sttPoint, dstPoint;

  function setRoute(sttPoint, dstPoint){

    const dstSource = new VectorWMS();
    let dstLayer = new Vector({
      source : dstSource,
      name : 'dstLayer'
    });

  const start_x = parseFloat(sttPoint.x); 
  const start_y = parseFloat(sttPoint.y);
  const arrive_x = parseFloat(dstPoint.x);
  const arrive_y = parseFloat(dstPoint.y);
  
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
  
      const coords1 = [];
      const coords2 = [];
      
      coords1.push(start_x, start_y);
      coords2.push(start_x, start_y);

      console.log(data.time1);
      console.log(data.time2);

      for(var i=0; i<(data.route1).length; i++){
  
        var datalists1 = data.route1[i];
        
        coords1.push(datalists1.X, datalists1.Y);
  
        if(i===0){
          map.getView().setCenter([datalists1.X, datalists1.Y]);
          map.getView().setZoom(17);
        }
      }
      for(var i=0; i<(data.route2).length; i++){
  
        var datalists2 = data.route2[i];
        
        coords2.push(datalists2.X, datalists2.Y);
  
        if(i===0){
          map.getView().setCenter([datalists2.X, datalists2.Y]);
          map.getView().setZoom(17);
        }
      }

      coords1.push(arrive_x, arrive_y);
      coords2.push(arrive_x, arrive_y);

      let dstIconStyle = new Style({
        image: new Icon({
          src : process.env.PUBLIC_URL + '/pin_mark.png',
          scale : 0.07,
        })
      });
    
      let dstMarker = new Feature({
        geometry: new Point([arrive_x, arrive_y]),
        name: "destination",
      });
    
      let srcIconStyle= new Style({
        image: new Icon({
          src : process.env.PUBLIC_URL + '/pin_mark.png',
          scale : 0.07,
        })
      });
    
      let srcMarker = new Feature({
        geometry: new Point([start_x, start_y]),
        name: "source",
      });
  
    let path1 = [];
    for(let i = 0; i < coords1.length; i+=2) {
    path1.push([coords1[i], coords1[i + 1]]);
    }
    let path2 = [];
    for(let i = 0; i < coords2.length; i+=2) {
    path2.push([coords2[i], coords2[i + 1]]);
    }
  
    const lineString1 = new LineString(path1);
    const lineString2 = new LineString(path2);
    const feature1 = new Feature({
      geometry: lineString1
    });
    const feature2 = new Feature({
      geometry: lineString2
    });

    feature1.setStyle(new Style({
      stroke: new Stroke({
        color: [86, 137, 214, 0.9],    //#5689d6
        width: 10,
        lineCap: 'round',
        lineJoin: 'round',
      })
    }))
    feature2.setStyle(new Style({
      stroke: new Stroke({
        color: [124, 126, 125, 0.9],
        width: 10,
        lineCap: 'round',
        lineJoin: 'round',
      })
    }))

    dstMarker.setStyle(dstIconStyle);
    srcMarker.setStyle(srcIconStyle);
    dstSource.addFeature(dstMarker);
    dstSource.addFeature(srcMarker);
    dstSource.addFeature(feature1);
    dstSource.addFeature(feature2);
    dstSource.removeFeature(feature2);
    
    dstLayer.setZIndex(2);
    map.addLayer(dstLayer);
  
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
   */