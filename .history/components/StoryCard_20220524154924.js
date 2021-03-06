import Image from "next/image";

function StoryCard({ name, src, profile}) {
  return (
    <div>
        <Image
          className="absolute opacity-0 lg:opacity-100 rounded-full lg:rounded-3xl"
          src={profile}
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
        />
        <Image 
          className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
          src={src}
          lay
        />
    </div>
  )
}

export default StoryCard;