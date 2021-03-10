import { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';

import { AuthContext } from '../context/auth';
import { useForm } from '../utils/hooks';
import { REGISTER_STARTUP } from '../utils/graphql';

const Register = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(startupRegister, {
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    industry: 'Green-Tech',
    imageUrl: '',
    location: '',
    growthStage: 'Undisclosed',
    fundingStage: 'Undisclosed',
  });

  console.log(values);

  const [addStartup, { loading }] = useMutation(REGISTER_STARTUP, {
    update(_, { data: { startupRegister: startupDate } }) {
      context.login(startupDate);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function startupRegister() {
    addStartup();
  }

  return (
    <div className='form-container'>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 pt-36 pb-20 px-4 sm:px-6 lg:px-8 absolute w-screen top-0'>
          <div className='max-w-md w-full space-y-8'>
            <div>
              <img
                className='mx-auto h-12 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Workflow'
              />
              <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                Registrujte vaš startup
              </h2>
            </div>
            <form className='mt-8 space-y-6' onSubmit={onSubmit}>
              <input type='hidden' name='remember' defaultValue='true' />
              <div className='grid gap-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Email
                  </label>
                  <input
                    label='Email'
                    placeholder='email@email.com'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    type='email'
                    error={errors.email ? true : false}
                    className='appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Ime startupa
                  </label>
                  <input
                    label='Company'
                    placeholder='Ime startupa'
                    name='company'
                    value={values.company}
                    onChange={onChange}
                    type='text'
                    error={errors.company ? true : false}
                    className='appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <label
                    htmlFor='imageUrl'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    URL cover slike
                  </label>
                  <input
                    label='ImageUrl'
                    placeholder='Url slike'
                    name='imageUrl'
                    value={values.imageUrl}
                    onChange={onChange}
                    type='text'
                    error={errors.imageUrl ? true : false}
                    className='appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <label
                    htmlFor='industry'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Industrija
                  </label>
                  <select
                    label='Industry'
                    id='industry'
                    value={values.industry}
                    onChange={onChange}
                    name='industry'
                    autoComplete='industry'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option>Green-Tech</option>
                    <option>Fin-tech</option>
                    <option>Bio-tech</option>
                    <option>Software</option>
                    <option>Edu-tech</option>
                    <option>Hardware</option>
                    <option>Automotive</option>
                    <option>SaaS</option>
                    <option>Mobility</option>
                    <option>On-demand</option>
                    <option>E-Commerce</option>
                    <option>Jobs & Recruiting</option>
                    <option>Ad-tech</option>
                    <option>Media</option>
                    <option>Gaming</option>
                    <option>Fashion</option>
                    <option>Transportation</option>
                    <option>Sports</option>
                    <option>Food & Beverages</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='location'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Lokacija
                  </label>
                  <input
                    label='Location'
                    placeholder='Beograd, Srbija'
                    name='location'
                    value={values.location}
                    onChange={onChange}
                    type='text'
                    error={errors.location ? true : false}
                    className='appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <label
                    htmlFor='growthStage'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Growth Stage
                  </label>
                  <select
                    label='GrowthStage'
                    id='growthStage'
                    value={values.growthStage}
                    onChange={onChange}
                    name='growthStage'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option>Undisclosed</option>
                    <option>Idea/Prototype</option>
                    <option>Early growth</option>
                    <option>Late growth</option>
                    <option>Mature</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='fundingStage'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Funding Stage
                  </label>
                  <select
                    label='FundingStage'
                    id='FundingStage'
                    value={values.fundingStage}
                    onChange={onChange}
                    name='fundingStage'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option>Undisclosed</option>
                    <option>Bootstrapped</option>
                    <option>Micro-Seed</option>
                    <option>Seed</option>
                    <option>Series A+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Šifra
                  </label>
                  <input
                    label='Šifra'
                    placeholder='Šifra'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    type='password'
                    error={errors.password ? true : false}
                    className='appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Potvrdi Šifru
                  </label>
                  <input
                    label='Potvrdi Šifru'
                    placeholder='Potvrdi Šifu'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={onChange}
                    type='password'
                    error={errors.confirmPassword ? true : false}
                    className='appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    {/* Heroicon name: solid/lock-closed */}
                    <svg
                      className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  Registrujte ga
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {Object.keys(errors).length > 0 && (
        <div className='ui error message max-w-md'>
          <ul className='list'>
            {Object.values(errors).map((val) => (
              <li key={val}>{val}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Register;
