function Post({ name, message, email, postImage, image, timestamp}) {
  return (
    <div className="flex flex-col">
        <div className="p-5">
            <div className="flex items-center space-x-2">
                <img
                  className="rounded-full"
                  src={image}
                  width={40}
                  height={40}
                  alt=""
                />
                <div>
                    <p className="font-medium">{name}</p>

                    <p className="text-xs text-gray-500">
                        {
                        new Date(timestamp?.toDate()).toLocaleString()
                        }
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post