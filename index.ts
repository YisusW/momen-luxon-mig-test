import { DateTime, Interval } from 'luxon';
import moment from 'moment';

const now = DateTime.now();

const token = DateTime.utc();

const ROWTIME_FORMAT = 'YYYY-MM-DDTHH:mm';

console.log(
  `moment Format => ${moment().format(ROWTIME_FORMAT)}
   luxonD Format => ${DateTime.local().toFormat(`yyyy-MM-dd'T'HH:mm`)}
  `
);
