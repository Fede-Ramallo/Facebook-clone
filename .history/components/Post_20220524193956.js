function Post({ name, message, email, postImage, image, timestamp}) {
  return (
    <div className="flex flex-col">
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Post