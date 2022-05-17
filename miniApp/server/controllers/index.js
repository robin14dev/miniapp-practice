const { default: axios } = require('axios');
const models = require('../models');

module.exports = {
  
//? key 값 환경변수 처리??? 키보안 어케??
 weather : {
   post : (req, res) => {
     //console.log('what is req', req.body.coord);
      const {latitude, longitude} = req.body.coord
    axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`)
    .then(result => {
      // console.log(result.data.main.temp);
      // console.log('description??',result.data.weather[0].description); // clear sky
    //TODO 로그인했을 때 보이는 날씨 정보 logsDB에 저장하기

    //TODO 로그인한 특정 유저의 누적 로그기록 logsDB에서 불러오기 
    // const weatherStatus = result.data.weather[0].description
    // console.log('weatherStatus-------',weatherStatus);
    
    //# 날씨 정보 view로 보여주기
     res.status(200).json(result.data)
    })
   }
   
   
 },

 advice : {
   post : (req, res) => {
     console.log('advice req!!!!!!!!', req.body.weatherStatus);
     const {weatherStatus} = req.body
      //# 날씨 상태에 맞는 message advicesDB에서 불러오기
    //! 메시지랑 날씨정보 두개를 보내주니깐 에러가 남 분기해주니깐 정상작동 ??
    models.advices.get(weatherStatus ,(error, message) => {
      if (error) {
        res.status(500).send('Internal Server Error')
      } else {
        console.log('controller advice', message);
        res.status(200).json(message)
      }
    })
   }
 }

  
};


