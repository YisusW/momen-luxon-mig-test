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
  `moment format => ${moment().format('HH:mm')}
  luxonD format => ${DateTime.now().toFormat('T')}`
);

/**
 * return 19/04/2022 new Date(2022, 4, 19);
 */
const dateToDiff = new Date(2022, 4, 19);

// NOT SAME

const momentNow = moment(new Date());
const dateTimeN = DateTime.fromJSDate(new Date());

const isSameOrAfter = (current, compareDate) =>
  Interval.before(current, 0).equals(Interval.after(compareDate, 0)) ||
  Interval.before(current, 0).isAfter(compareDate);

console.log(`
  moment => ${moment(dateToDiff).isSameOrAfter(momentNow)}
  luxon =>  ${isSameOrAfter(DateTime.fromJSDate(dateToDiff), dateTimeN)}
`);

const SAME_DATE = dateToDiff;

// THE SAME

const momentSame = moment(SAME_DATE);
const luxonSame = DateTime.fromJSDate(SAME_DATE);

console.log(`
  SAME
  moment => ${moment(dateToDiff).isSameOrAfter(momentSame)}
  luxon =>  ${isSameOrAfter(DateTime.fromJSDate(dateToDiff), luxonSame)}
`);

// AFTER

const AFTER_DATE = new Date(2022, 4, 20);

const momentAfter = moment(AFTER_DATE);
const luxonAfter = DateTime.fromJSDate(AFTER_DATE);

console.log(`
  AFTER
  moment => ${moment(dateToDiff).isSameOrAfter(momentAfter)}
  luxon =>  ${isSameOrAfter(DateTime.fromJSDate(dateToDiff), luxonAfter)}
`);

// Before

const BEFORE_DATE = new Date(2022, 3, 20);

const momentBefore = moment(BEFORE_DATE);
const luxonBefore = DateTime.fromJSDate(BEFORE_DATE);

console.log(`
  AFTER
  moment => ${moment(dateToDiff).isSameOrAfter(momentBefore)}
  luxon =>  ${isSameOrAfter(DateTime.fromJSDate(dateToDiff), luxonBefore)}
`);

// positions

console.log(`
  AFTER
  moment => ${moment(dateToDiff).isSameOrAfter(momentBefore)}
  luxon =>  ${isSameOrAfter(DateTime.fromJSDate(dateToDiff), luxonBefore)}
`);

// testing isBefore function

console.log(`
  BEFORE
  moment => ${moment(dateToDiff).isBefore(momentBefore)}
  luxon =>  ${Interval.after(DateTime.fromJSDate(dateToDiff), 0).isBefore(
    luxonBefore
  )}
`);
