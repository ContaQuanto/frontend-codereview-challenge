import type { Candidate } from './globalTypes';

const mockData: Candidate[] = [
  {
    id: 1,
    name: 'Joe',
    email: 'joe@mail.com',
    birth_date: '1992-11-12',
    year_of_experience: 10,
    position_applied: 'frontend developer',
    application_date: '2022-04-21',
    status: 'approved'
  },
  {
    id: 2,
    name: 'Mary',
    email: 'mary@mail.com',
    birth_date: '1989-09-07',
    year_of_experience: 8,
    position_applied: 'designer',
    application_date: '2022-04-28',
    status: 'waiting'
  },
  {
    id: 3,
    name: 'Jackson',
    email: 'jack@mail.com',
    birth_date: '1994-03-22',
    year_of_experience: 1,
    position_applied: 'product manager',
    application_date: '2021-02-02',
    status: 'rejected'
  }
];

export default mockData;
