function SidebarRow ({src, Icon, title}) {
    const { data: session } = useSession();

    return(
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            {src && (
                <Image
            )}
        </div>
    )
}

export default SidebarRow;