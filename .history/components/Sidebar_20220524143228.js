import { useSession } from 'next-auth/react';

function Sidebar () {
    const { data: session } = useSession();

    return(
        <div className="p-2 mt-5 mw">

        </div>
    )
}

export default Sidebar;