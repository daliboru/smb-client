import { useQuery } from '@apollo/client';
import { Container, Grid, Input, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import { useContext } from 'react';
import { FETCH_POSTS_QUERY } from '../utils/graphql';

const Home = () => {
  const { loading, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POSTS_QUERY
  );

  const { user } = useContext(AuthContext);

  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
            Startup Matcher Balkan
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Mi povezujemo startape sa neverovatnim ljudima
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <section className='text-gray-600 body-font'>
          <div className='container py-24 mx-auto'>
            {loading ? (
              <div className='loader'></div>
            ) : (
              <div className='flex flex-wrap -m-4'>
                {posts &&
                  posts.map((post) => <PostCard key={post.id} post={post} />)}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
    // <Container>
    //   <section className='mt-8 text-gray-400 bg-gray-900 body-font'>
    //     <div className='container px-5 py-24 mx-auto'>
    //       <div className='page-title'>
    //         <h2>Skorašnji oglasi</h2>
    //       </div>
    //       <>
    //         {loading ? (
    //           <div className='loader'></div>
    //         ) : (
    //           <div className='flex flex-wrap -m-4'>
    //             {posts &&
    //               posts.map((post) => <PostCard key={post.id} post={post} />)}
    //           </div>
    //         )}
    //       </>
    //     </div>
    //   </section>
    // </Container>
  );
};

export default Home;
