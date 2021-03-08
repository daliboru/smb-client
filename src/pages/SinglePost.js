import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import moment from 'moment';
import DeleteButton from '../components/DeleteButton';
import { init, send } from 'emailjs-com';

import { FETCH_POST_QUERY } from '../utils/graphql';
import { AuthContext } from '../context/auth';

const SinglePost = (props) => {
  init('user_UsM8uv9yNxeFqt9Qgp0sV');

  const postId = props.match.params.postId;
  const { user } = useContext(AuthContext);
  const { data: { getPost } = {} } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId,
    },
  });
  const [toSend, setToSend] = useState({
    from_firstName: '',
    from_lastName: '',
    message: '',
    cv: '',
    email_address: '',
    reply_to: '',
    position: '',
    to: '',
  });

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setToSend({
      ...toSend,
      position: getPost.position,
      to: getPost.company,
      email_address: toSend.reply_to,
    });
    send(
      process.env.REACT_APP_.SERVICE_ID,
      process.env.REACT_APP_.TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_.USER_ID
    ).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

  let postMarkup;

  if (!getPost) {
    postMarkup = (
      <main className='bg-gray-100 h-auto min-h-screen w-screen absolute top-0'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-32'>
          <p className='mt-2 my-auto text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Loading...
          </p>
        </div>
      </main>
    );
  } else {
    const {
      id,
      body,
      createdAt,
      mailto,
      company,
      position,
      industry,
      email,
      location,
      growthStage,
      fundingStage,
    } = getPost;

    const deletePostCallback = () => {
      props.history.push('/');
    };

    postMarkup = (
      <main className='bg-gray-100 h-auto min-h-screen w-screen absolute top-0'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-32'>
          <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Opis posla
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                {moment(createdAt).fromNow()}
              </p>
            </div>
            <div className='border-t border-gray-200'>
              <dl>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Pozicija
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {position}
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Startup</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {company}
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Industrija
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {industry}
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Lokacija
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {location}
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Kontakt email
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {mailto}
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Opis</dt>
                  <dd
                    className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'
                    dangerouslySetInnerHTML={{ __html: body }}
                  ></dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Growth stage
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {growthStage}
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Funding stage
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {fundingStage}
                  </dd>
                </div>
                {/* <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Opseg plate
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    $500 - $700
                  </dd>
                </div> */}
                {user && user.email === email && (
                  <div className='bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Delete post
                    </dt>
                    {/* <button
                  className='whitespace-nowrap px-4 py-2 max-w-min border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700'
                  postId={id}
                  onClick={deletePostCallback}
                /> */}
                    <DeleteButton
                      className='px-4 py-2 max-w-min '
                      postId={id}
                      callback={deletePostCallback}
                    />
                  </div>
                )}
              </dl>
            </div>
          </div>
          <div>
            <div className='hidden sm:block' aria-hidden='true'>
              <div className='py-5'>
                <div className='border-t border-gray-200' />
              </div>
            </div>
            <div className='mt-10 sm:mt-0'>
              <div className='md:grid md:grid-cols-3 md:gap-6'>
                <div className='md:col-span-1'>
                  <div className='px-4 sm:px-0'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Konkurišite za poziciju
                    </h3>
                    <p className='mt-1 text-sm text-gray-600'>
                      U ovoj test verziji sadržaj forme ce stići na mail iz ove
                      forme
                    </p>
                  </div>
                </div>
                <div className='mt-5 md:mt-0 md:col-span-2'>
                  <form onSubmit={sendEmail}>
                    <div className='shadow overflow-hidden sm:rounded-md'>
                      <div className='px-4 py-5 bg-white sm:p-6'>
                        <div className='grid grid-cols-6 gap-6'>
                          <div className='col-span-6 sm:col-span-3'>
                            <label
                              htmlFor='from_firstName'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Ime
                            </label>
                            <input
                              type='text'
                              name='from_firstName'
                              id='from_firstName'
                              autoComplete='given-name'
                              value={toSend.from_firstName}
                              onChange={handleChange}
                              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                            />
                          </div>
                          <div className='col-span-6 sm:col-span-3'>
                            <label
                              htmlFor='from_lastName'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Prezime
                            </label>
                            <input
                              type='text'
                              name='from_lastName'
                              id='from_lastName'
                              autoComplete='family-name'
                              value={toSend.from_lastName}
                              onChange={handleChange}
                              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                            />
                          </div>
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='reply_to'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Email adresa
                            </label>
                            <input
                              type='text'
                              name='reply_to'
                              id='reply_to'
                              autoComplete='email'
                              value={toSend.reply_to}
                              onChange={handleChange}
                              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                            />
                          </div>
                          <div className='col-span-6 sm:col-span-4'>
                            <div>
                              <label
                                htmlFor='message'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Prijava
                              </label>
                              <div className='mt-1'>
                                <textarea
                                  id='message'
                                  name='message'
                                  rows={3}
                                  className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
                                  placeholder='Be awesome!'
                                  value={toSend.message}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='cv'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Link do CV (npr. Dropbox)
                            </label>
                            <input
                              type='text'
                              name='cv'
                              id='cv'
                              autoComplete='cv'
                              value={toSend.cv}
                              onChange={handleChange}
                              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                            />
                          </div>
                          {/* <div class='col-span-6 sm:col-span-4'>
                            <label className='block text-sm font-medium text-gray-700'>
                              CV
                            </label>
                            <div className='mt-1 flex items-center'>
                              <input
                                type='file'
                                content='Zakačite CV'
                                className='mr-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                        <button
                          type='submit'
                          className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                          Konkurišite
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return postMarkup;
};

export default SinglePost;
