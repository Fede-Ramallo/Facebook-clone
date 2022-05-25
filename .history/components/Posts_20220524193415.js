import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function Posts() {
    const [realtimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );
  return (
    <div>{realtimePosts.docs.map(posts)}</div>
  )
}

export default Posts;