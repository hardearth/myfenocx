// third-party
import { sub } from 'date-fns';
import { Chance } from 'chance';

const chance = new Chance();

export const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

function mockData(index) {
  return {
    id: `${chance.bb_pin()}${index}`,
    email: chance.email({ domain: 'gmail.com' }),
    contact: chance.phone(),
    date: chance.date({ string: true }),
    datetime: sub(new Date(), {
      days: chance.integer({ min: 0, max: 30 }),
      hours: chance.integer({ min: 0, max: 23 }),
      minutes: chance.integer({ min: 0, max: 59 })
    }),
    boolean: chance.bool(),
    role: chance.profession(),
    company: chance.company(),
    address: {
      full: `${chance.address()}, ${chance.city()}, ${chance.country({ full: true })} - ${chance.zip()}`,
      country: chance.country({ full: true })
    },
    name: {
      first: chance.first(),
      last: chance.last(),
      full: chance.name()
    },
    text: {
      title: chance.sentence({ words: chance.integer({ min: 3, max: 5 }) }),
      sentence: chance.sentence(),
      description: chance.paragraph
    },
    number: {
      percentage: chance.integer({ min: 0, max: 100 }),
      rating: chance.floating({ min: 0, max: 5, fixed: 2 }),
      status: (min, max) => chance.integer({ min, max }),
      age: chance.age(),
      amount: chance.integer({ min: 1, max: 10000 })
    }
  };
}

export default mockData;
