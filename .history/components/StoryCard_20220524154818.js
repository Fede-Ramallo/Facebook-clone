import Image from "next/image";

function StoryCard({ name, src, profile}) {
  return (
    <div>
        <Image
          className="absolute opacity-0 lg:opacity-100 rounded-full lg:rounded-3xl"
          src={src}
        />
    </div>
  )
}

export default StoryCard;