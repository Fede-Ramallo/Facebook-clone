import { useCollection } from 'react-firebase-hooks/firestore';

function Posts() {
    const [realtimePosts, loading, error] = useCollection(
        db
    );
  return (
    <div>Posts</div>
  )
}

export default Posts;