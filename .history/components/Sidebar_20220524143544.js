import { useSession } from 'next-auth/react';
import SidebarRow from './SidebarRow';
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from "@heroicons/react/solid";
import {
    Chev,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

function Sidebar () {
    const { data: session } = useSession();

    return(
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon />
        </div>
    )
}

export default Sidebar;