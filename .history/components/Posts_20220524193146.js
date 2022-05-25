import { useCollection } from 'react-firebase-hooks/firestore';

function Posts() {
    const [realtimePosts, loading, error] = useCollection()
  return (
    <div>Posts</div>
  )
}

export default Posts;