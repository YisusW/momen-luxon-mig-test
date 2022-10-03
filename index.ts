import { DateTime, Interval } from 'luxon';
import moment from 'moment';

const date = new Date(2016, 5, 5);

console.log(
  `moment should be after => ${moment().isSameOrAfter(date)}
   luxonD should be after => ${Interval.before(DateTime.now(), 0).isAfter(
     DateTime.fromJSDate(date)
   )}
  `
);

console.log(
  `moment format => ${moment().format('DD-MMM HH:mm')}
  luxonD format => ${DateTime.now().toFormat('dd-MMM HH:mm')}`
);
