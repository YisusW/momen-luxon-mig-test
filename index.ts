import { DateTime } from 'luxon';
import moment from 'moment';

console.log(
  `moment format => ${moment().year()}
   luxonD format => ${DateTime.now().year}
  `
);
