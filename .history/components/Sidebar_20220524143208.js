import { useSession } from 'next-auth/react';

function Sidebar () {
    const { data: session } = useSession();

    return(
        <div className=''>

        </div>
    )
}

export default Sidebar;