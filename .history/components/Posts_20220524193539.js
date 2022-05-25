import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';

function Posts() {
    const [realtimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );
  return (
    <div>{realtimePosts.docs.map(post => {
        <Post
          key={post.id}
          name={post.data()}
        />
    })}</div>
  )
}

export default Posts;