import { DateTime } from 'luxon';
import moment from 'moment';

console.log(
  `moment format => ${moment().format('HH:mm')}
   luxonD format => ${DateTime.now().toFormat('HH:mm')}
  `
);
