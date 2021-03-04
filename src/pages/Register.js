import { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';

import { AuthContext } from '../context/auth';
import { useForm } from '../utils/hooks';
import { REGISTER_STARTUP } from '../utils/graphql';

const Register = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    imageUrl: '',
    industry: '',
    location: '',
    growthStage: '',
    fundingStage: '',
  });

  const [addUser, { loading }] = useMutation(REGISTER_STARTUP, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className='form-container'>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 absolute w-screen top-0'>
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
              <div className='rounded-md shadow-sm -space-y-px'>
                <div>
                  <input
                    label='Email'
                    placeholder='Email'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    type='email'
                    error={errors.email ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='Company'
                    placeholder='Ime startupa'
                    name='company'
                    value={values.company}
                    onChange={onChange}
                    type='text'
                    error={errors.company ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='ImageUrl'
                    placeholder='Url fotografije loga firme'
                    name='imageUrl'
                    value={values.imageUrl}
                    onChange={onChange}
                    type='text'
                    error={errors.imageUrl ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='Industry'
                    placeholder='Industrija startupa'
                    name='industry'
                    value={values.industry}
                    onChange={onChange}
                    type='text'
                    error={errors.industry ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='Location'
                    placeholder='Lokacija startupa'
                    name='location'
                    value={values.location}
                    onChange={onChange}
                    type='text'
                    error={errors.location ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='GrowthStage'
                    placeholder='Growth stage'
                    name='growthStage'
                    value={values.growthStage}
                    onChange={onChange}
                    type='text'
                    error={errors.growthStage ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='FundingStage'
                    placeholder='Funding stage'
                    name='fundingStage'
                    value={values.fundingStage}
                    onChange={onChange}
                    type='text'
                    error={errors.fundingStage ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='Šifra'
                    placeholder='Šifra'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    type='password'
                    error={errors.password ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <input
                    label='Potvrdi Šifru'
                    placeholder='Potvrdi Šifu'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={onChange}
                    type='password'
                    error={errors.confirmPassword ? true : false}
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
        <div className='ui error message'>
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
