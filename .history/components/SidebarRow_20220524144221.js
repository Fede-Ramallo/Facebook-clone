import Image from "next/image";

function SidebarRow ({src, Icon, title}) {
    const { data: session } = useSession();

    return(
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            {src && (
                <Image 
                  className="rounded-full"
                  src={src}
                  width={30}
                  height={30}
                  layout="fixed"
                />
            )}
            {Icon && (
                <Icon className
            )}
        </div>
    )
}

export default SidebarRow;