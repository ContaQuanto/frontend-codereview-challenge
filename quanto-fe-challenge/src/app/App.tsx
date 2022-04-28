import React, { useState } from 'react';
import useSWR from 'swr';

import './App.css';
import mockData from './mockdata';

import ageCounter from './utils/ageCounter';
import formatApplicationDate from './utils/formatApplicationDate';

import type { ApiResponse } from './globalTypes';

export async function fetcher(url: string) {
  const response = await fetch(url);
  return response.json();
}

function App() {
  const { data, error } = useSWR<ApiResponse>(`/api/candidates/${process.env.API_SECRET}`, fetcher);

  const [applications, setApplications] = useState(mockData);

  if (data?.candidates) {
    setApplications(data?.candidates);
  }

  if (!data && !error) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quanto FE Challenge</h1>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Anos de experiência</th>
                <th>Cargo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(
                ({ id, name, email, birth_date, year_of_experience, position_applied, application_date, status }) => (
                  <tr key={id}>
                    <td aria-label="name">{name}</td>
                    <td>{email}</td>
                    <td>{ageCounter(birth_date)}</td>
                    <td aria-label="year_of_experience">{year_of_experience}</td>
                    <td>{position_applied}</td>
                    <td>
                      <span>{formatApplicationDate(application_date)}</span>
                    </td>
                    <td>{status}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default App;
