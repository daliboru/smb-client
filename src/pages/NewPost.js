import { Form, Button } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Editor } from '@tinymce/tinymce-react';

import { useForm } from '../utils/hooks';
import { FETCH_POSTS_QUERY } from '../utils/graphql';
import { useState } from 'react';

const NewPost = (props) => {
  const { values, onChange, onChangeBody, onSubmit } = useForm(
    createPostCallback,
    {
      body: '',
      position: '',
      mailto: '',
    }
  );

  const [errors, setErrors] = useState({});

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: {
          getPosts: [result.data.createPost, ...data.getPosts],
        },
      });
      values.body = '';
      values.position = '';
      values.mailto = '';
      props.history.push('/');
    },
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <div className='bg-gray-100 h-auto min-h-screen w-screen absolute top-0'>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 md:grid md:grid-cols-3 md:gap-6 py-32'>
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Novi oglas
            </h3>
            <p className='mt-1 text-sm text-gray-600'>
              Ove informacije će biti javno prikazane, te pripazite šta delite.
            </p>
          </div>
        </div>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form onSubmit={onSubmit}>
            <div className='shadow sm:rounded-md sm:overflow-hidden'>
              <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='pozicija'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Pozicija
                    </label>
                    <input
                      placeholder='Pozicija...'
                      name='position'
                      id='pozicija'
                      type='text'
                      onChange={onChange}
                      value={values.position}
                      error={error ? true : false}
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='mailto'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Kontakt email
                    </label>
                    <input
                      type='email'
                      name='mailto'
                      onChange={onChange}
                      value={values.mailto}
                      error={error ? true : false}
                      id='mailto'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  {/* <div className='col-span-6 sm:col-span-4'>
                    <label
                      htmlFor='email_address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email address
                    </label>
                    <input
                      type='text'
                      name='email_address'
                      id='email_address'
                      autoComplete='email'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Country / Region
                    </label>
                    <select
                      id='country'
                      name='country'
                      autoComplete='country'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div> */}
                  <div className='col-span-6'>
                    <Editor
                      apiKey='47wv51j75npn84hwmetcasjtzbf587qr273gr62ldjfocy2p'
                      init={{
                        height: 300,
                        menubar: false,
                      }}
                      className='mt-1'
                      placeholder='Kratak opis...'
                      name='body'
                      onEditorChange={onChangeBody}
                      value={values.body}
                      error={error ? true : false}
                    />
                  </div>
                  {/* <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium text-gray-700'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label
                      htmlFor='state'
                      className='block text-sm font-medium text-gray-700'
                    >
                      State / Province
                    </label>
                    <input
                      type='text'
                      name='state'
                      id='state'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label
                      htmlFor='postal_code'
                      className='block text-sm font-medium text-gray-700'
                    >
                      ZIP / Postal
                    </label>
                    <input
                      type='text'
                      name='postal_code'
                      id='postal_code'
                      autoComplete='postal-code'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div> */}
                </div>
              </div>
              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Postavi
                </button>
              </div>
            </div>
          </form>
          {error && (
            <div className='ui error message' style={{ marginBottom: 20 }}>
              <ul className='list'>
                <li>{error.graphQLErrors[0].message}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!, $position: String!, $mailto: String!) {
    createPost(body: $body, position: $position, mailto: $mailto) {
      username
      id
      createdAt
      body
      company
      position
      mailto
    }
  }
`;
export default NewPost;
