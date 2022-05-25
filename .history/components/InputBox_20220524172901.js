import { useSession } from 'next-auth/react';
import Image from "next/image";

function InputBox() {
    const { data: session } = useSession();
  return (
    <div>
        <div>
            <Image 
              className="rounded-full"
              src={session.user.image}
              width={40}
              height={40}
              layout="fixed"
            />
            <form className="flex flex-1">
                <input type="text" placeholder={`What's on your mind, ${session.user.}`} />
            </form>
        </div>
    </div>
  )
}

export default InputBox;