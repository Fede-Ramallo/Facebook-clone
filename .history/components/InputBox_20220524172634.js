import { useSession } from 'next-auth/react';
import 'next/image'

function InputBox() {
    const { data: session } = useSession();
  return (
    <div>
        <div>
            <Image 
              className="rounded-full"
              src={session.user.image}
              width={30}
              height={30}
              layout="fixed"
            />
        </div>
    </div>
  )
}

export default InputBox;