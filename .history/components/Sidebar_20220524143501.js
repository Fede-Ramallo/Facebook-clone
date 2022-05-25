import { useSession } from 'next-auth/react';
import SidebarRow from './SidebarRow';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";

function Sidebar () {
    const { data: session } = useSession();

    return(
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon />
        </div>
    )
}

export default Sidebar;