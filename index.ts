import { DateTime } from 'luxon';
import moment from 'moment';

console.log(
  `moment format => ${moment().format('DD-MMM HH:mm')}
   luxonD format => ${DateTime.now().toFormat('d-MMM HH:mm')}
  `
);
