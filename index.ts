import { DateTime } from 'luxon';
import moment from 'moment';

console.log(
  `moment format => ${moment().format()}
   luxonD format => ${DateTime.now().toString()}
  `
);
