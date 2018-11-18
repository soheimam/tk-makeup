'use strict';

function generateSeedData(days) {
  let output = []
  for (let index = 0; index < days; index++) {
      var day = new Date();
      var nextDay = new Date(day);
      nextDay.setDate(day.getDate() + index);

      var dd = nextDay.getDate();
      var mm = nextDay.getMonth()+1; //January is 0!
      var yyyy = nextDay.getFullYear();
    
      if(dd<10) {
          dd = '0'+dd
      } 

      if(mm<10) {
          mm = '0'+mm
      } 

      day = yyyy + '-' + mm + '-' + dd ;
        
      output.push({
          date: day,
          available:[12,13,14,15,16,17,18,19],
          unavailable: [0]
      })
  }

  return output
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Availabilities', generateSeedData(2000), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Availabilities', null, {});
  }
};

