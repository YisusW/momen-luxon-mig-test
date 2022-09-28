import { DateTime, Interval } from 'luxon';
import moment from 'moment';

const date = new Date(2016, 5, 5);

// after

console.log(
  `moment should be after (true) => ${moment().isSameOrAfter(date)}
   luxonD should be after (true) => ${Interval.before(
     DateTime.now(),
     0
   ).isAfter(DateTime.fromJSDate(date))}
  `
);

// before

console.log(
  `moment should be false => ${moment('2015-10-20').isSameOrAfter('2016-5-1')}
   luxona should be false => ${Interval.before(
     DateTime.fromJSDate(new Date(2015, 10, 20)),
     0
   ).isAfter(DateTime.fromJSDate(new Date(2016, 5, 1)))}
  `
);

// equals

console.log(
  `moment should be true => ${moment('2015-10-20').isSameOrAfter('2016-5-1')}
   luxona should be true => ${Interval.before(
     DateTime.fromJSDate(new Date(2015, 10, 20)),
     0
   ).isAfter(DateTime.fromJSDate(new Date(2016, 5, 1)))}
  `
);

const sameDate = DateTime.fromJSDate(new Date(2015, 10, 20));

console.log(
  `moment should be false => ${moment('2015-10-20').isSameOrAfter('2015-10-20')}
   luxona should be false => ${Interval.before(sameDate, 0).equals(
     Interval.after(sameDate, 0)
   )}
  `
);
