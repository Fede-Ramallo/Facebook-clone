import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function Posts() {
    const [realtimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy
    );
  return (
    <div>Posts</div>
  )
}

export default Posts;