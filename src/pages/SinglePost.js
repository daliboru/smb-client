import { useContext } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import moment from 'moment';
import DeleteButton from '../components/DeleteButton';

import { AuthContext } from '../context/auth';

const SinglePost = (props) => {
  const postId = props.match.params.postId;
  const { user } = useContext(AuthContext);
  const { data: { getPost } = {} } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId,
    },
  });

  let postMarkup;

  if (!getPost) {
    postMarkup = (
      <main className='bg-gray-100 h-auto min-h-screen w-screen absolute top-0'>
        <div class='max-w-7xl mx-auto sm:px-6 lg:px-8 py-32'>
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
      username,
      mailto,
      company,
      position,
    } = getPost;

    const deletePostCallback = () => {
      props.history.push('/');
    };

    postMarkup = (
      <main className='bg-gray-100 h-auto min-h-screen w-screen absolute top-0'>
        <div class='max-w-7xl mx-auto sm:px-6 lg:px-8 py-32'>
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
                    Opseg plate
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    $500 - $700
                  </dd>
                </div>
                {user && user.username === username && (
                  <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
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
        </div>
      </main>
    );
  }

  return postMarkup;
};

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      company
      position
      mailto
    }
  }
`;

export default SinglePost;
