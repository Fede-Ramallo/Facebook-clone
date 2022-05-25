import { useSession } from 'next-auth/react';
import SidebarRow from './SidebarRow';
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from "@heroicons/react/solid";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline";

function Sidebar () {
    const { data: session } = useSession();

    return(
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Friends" />
            <SidebarRow Icon={DesktopComputerIcon} title="Friends" />
            <SidebarRow Icon={CalendarIcon} title="Friends" />
            <SidebarRow Icon={ClockIcon} title="Friends" />
            <SidebarRow Icon={ChevronDownIcon} title="Friends" />
        </div>
    )
}

export default Sidebar;