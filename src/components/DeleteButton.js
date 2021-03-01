import { useState } from 'react';
import { Button, Icon, Confirm } from 'semantic-ui-react';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { FETCH_POSTS_QUERY } from '../utils/graphql';

const DeleteButton = ({ postId, callback }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    variables: {
      postId,
    },
    update(proxy, res) {
      setConfirmOpen(false);
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      res = data.getPosts.filter((p) => p.id !== postId);
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data: { getPosts: res } });
      if (callback) callback();
    },
    onError(err) {
      console.log(err);
      return err;
    },
  });

  return (
    <>
      <Button
        as='div'
        color='red'
        floated='right'
        size='mini'
        onClick={() => setConfirmOpen(true)}
      >
        <Icon name='trash' style={{ margin: 0 }} />
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePost}
        content='Da li ste sigurni?'
      />
    </>
  );
};

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export default DeleteButton;
