import { DateTime, Interval } from 'luxon';
import moment from 'moment';

const now = DateTime.now();

const token = DateTime.utc();

const ROWTIME_FORMAT = 'YYYY-MM-DDTHH:mm';

console.log(
  `moment Format => ${moment().subtract(10, 'minutes').format('HH:mm')}
   luxonD Format => ${DateTime.local().minus({ minutes: 10 }).toFormat('HH:mm')}
  `
);
