import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import DeleteButton from './DeleteButton';

const PostCard = ({
  post: { company, position, username, id, createdAt, imageUrl },
}) => {
  const { user } = useContext(AuthContext);
  console.log(imageUrl);
  return (
    <div className='xl:w-1/4 md:w-1/2 p-4'>
      <div className='bg-gray-100 p-4 rounded-lg card'>
        <Link to={`/posts/${id}`}>
          <img
            className='h-40 rounded w-full object-cover object-center mb-2'
            src={imageUrl}
            alt='content'
          />
        </Link>
        <Link
          className='tracking-widest text-indigo-500 text-xs font-medium title-font'
          to={`/users/${username}`}
        >
          {company}
        </Link>
        <h2 className='text-lg leading-6 font-medium text-gray-900 '>
          {position}
        </h2>
        <p className='leading-relaxed text-base'>
          <span className='date'>{moment(createdAt).fromNow(true)} ago</span>
        </p>
        {user && user.username === username && <DeleteButton postId={id} />}
      </div>
    </div>
    // <div className='xl:w-1/4 md:w-1/2 p-4'>
    //   <Link to={`/posts/${id}`}>
    //     <img
    //       className='object-cover object-center w-full h-56" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    //       src='https://www.dencrypt.dk/wp-content/uploads/2019/04/2018-18-Job-Icon.png'
    //     />
    //     <div className='flex items-center px-6 py-3 bg-gray-900'>
    //       <h1 className='mx-3 text-lg font-semibold text-white'>{position}</h1>
    //     </div>
    //     <Card.Header>{position}</Card.Header>
    //     <Card.Meta>
    //       <span className='date'>{moment(createdAt).fromNow(true)}</span>
    //     </Card.Meta>
    //   </Link>
    //   <Card.Content extra>
    //     <Button
    //       content={company}
    //       icon='building'
    //       as={Link}
    //       to={`/users/${username}`}
    //       labelPosition='left'
    //       size='mini'
    //     />
    //     {user && user.username === username && <DeleteButton postId={id} />}
    //   </Card.Content>
    // </div>
  );
};

export default PostCard;
