// Import stylesheets
import './style.css';
import { DateTime, Interval } from 'luxon';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const now = DateTime.now();

const theDateBefore = DateTime.utc();

console.log(
  Interval.before(DateTime.utc(), 0).isAfter(DateTime.now()),
  theDateBefore,
  now
);
