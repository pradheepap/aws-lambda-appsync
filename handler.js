'use strict';

module.exports.getEventsDS = async event => {
  return [
    { 
      name : `Jane's Birthday Party`,
      date: '13-Oct-2020'
     },
     { 
      name : `AWS Meetup`,
      date: '21-Oct-2020'
     },
     {
      date: '23-Oct-2020'
     },
  ]
};


module.exports.getLocationDS = async event => {
  
  return "Zoom";
    
 };
