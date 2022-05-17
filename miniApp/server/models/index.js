const db = require('../db');

module.exports = {
  advices: {
    get: (weatherStatus, callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      //console.log('model advice here????',weatherStatus);
      const queryString = `SELECT message FROM advices WHERE weatherStatus='${weatherStatus}'`;

      db.query(queryString, (error, result) => {
         // console.log('models result!!!', result);
         callback(error, result);
       
      });
    },
  },
  
};
