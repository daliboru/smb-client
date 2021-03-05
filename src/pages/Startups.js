import { useContext } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { FETCH_STARTUPS } from '../utils/graphql';
import StartupTable from '../components/StartupTable';

const Startups = () => {
  const { data: { getStartups: startups } = {} } = useQuery(FETCH_STARTUPS, {
    variables: {},
  });

  let startupMarkup;

  if (!startups) {
    startupMarkup = (
      <main className='bg-gray-100 h-auto min-h-screen w-screen absolute top-0'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-32'>
          <p className='mt-2 my-auto text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Loading...
          </p>
        </div>
      </main>
    );
  } else {
    startupMarkup = (
      <main className='bg-gray-100 h-auto min-h-screen w-screen absolute top-0'>
        <div className='flex flex-col max-w-7xl mx-auto py-32'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Ime startupa
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Industrija
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Lokacija
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Growth Stage
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Funding Stage
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {startups &&
                      startups.map((startup) => (
                        <StartupTable key={startup.id} startup={startup} />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return startupMarkup;
};

export default Startups;
