import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [coord, setCoord] = useState([0,0])
  const [temperature, setTemperature] = useState(0)
  const [location, setLocation] = useState('ullengdo')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('날씨에 따른 메시지')

  //! 계속 받아와짐 state 무한 렌더링
  // navigator.geolocation.getCurrentPosition((pos) => {
  //   console.log(pos);
  //   const latitude = pos.coords.latitude;
  //   const longitude = pos.coords.longitude;
  //   const curCoord = [latitude ,  longitude]
  //   setCoord(curCoord)
  //   })
//# description 상태가 true면, 날씨 상태를 보내, adviceDB에서 메시지 불러오기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
    //console.log(pos);
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const curCoord = [latitude ,  longitude]
    setCoord(curCoord)
  })
}, []) //? 빈배열 추가하니깐 해결됐는데 유저가 용인에서 앱을 키고 용인날씨를 얻었는데 수원으로 이동, 수원날씨 받아오기 어케?? 새로고침??



axios.post('http://localhost:4000/weatherInfo', {
 coord : {latitude : coord[0], longitude : coord[1]}
})
.then(function (response) {
  console.log(response);
  const {temp, temp_min, temp_max, humidity} = response.data.main
  const {name } = response.data // 지역
  const {description} = response.data.weather[0]
  setTemperature(temp)
  setLocation(name)
  setDescription(description)

  console.log(temp, temp_min, temp_max, humidity, name, description);
})
.catch(function (error) {
  console.log(error);
});

if(description) {
  axios.post('http://localhost:4000/advice', {
    weatherStatus : description
  })
  .then((response) => {
    console.log('description response !!!!',response);
    console.log(response.data[0].message);
    const {message} = response.data[0]
    setMessage(message)
  })
  .catch(function (error) {
    console.log(error);
  });

  console.log('description true',description);
} else {
  console.log('description false',description);
}
  
  return (
    <div className="App">
      <p>latitude : {coord[0].toFixed(2)}, longitude : {coord[1].toFixed(2)}</p>
     <ul>
       <li><b>temperature : </b>{temperature}</li>
       <li><b>날씨API_description :</b> {description}</li>
       <li><b>현재 위치? :</b> {location}</li>
       <li><b> DB에 저장된 Advice message : </b>{message}</li>

     </ul>
    </div>
  );
}

export default App;
