import { DateTime } from 'luxon';
import moment from 'moment';

console.log(
  `moment diff => ${moment().diff(
    moment().utc().subtract(100, 'hours'),
    'minutes'
  )}
   luxonD diff => ${
     DateTime.local().diff(DateTime.utc().minus({ hours: 100 }), 'minutes')
       .minutes
   }
  `
);
