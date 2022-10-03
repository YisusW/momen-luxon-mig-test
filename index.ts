import { DateTime, Duration, Interval } from 'luxon';
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
  `moment format => ${moment()}
  luxonD format => ${DateTime.now().toHTTP()}`
);
