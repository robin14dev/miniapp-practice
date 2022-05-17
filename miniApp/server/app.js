const express = require('express');
const indexRouter = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 4000;
const path = require('path')


// app.use(
//   morgan('      :method :url :status :res[content-length] - :response-time ms')
// );
//
//! 아래 두개를 해줘야 바디로 받아와짐 공부 추가
app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

//app.use(cors());
app.use(cors({
  origin: '*', // 출처 허용 옵션
  credential: 'true' // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  }));
  
app.use('/', indexRouter);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
  
  })


  

module.exports = app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
}); // 왜 이렇게 하지?? 
