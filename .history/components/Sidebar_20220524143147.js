import { useSession } from 'next-auth/react';

function Sidebar () {
    const { data: session } = useSession()
    return(
        <div>

        </div>
    )
}

export default Sidebar;