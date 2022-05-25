function Post({ name, message, email, postImage, image, timestamp}) {
  return (
    <div className="flex flex-col">
        <div>
            <div>
                <img
                  className="rounded-full"
                  src={image}
                  width={40}
                  height
                  alt=""
                />
            </div>
        </div>
    </div>
  )
}

export default Post