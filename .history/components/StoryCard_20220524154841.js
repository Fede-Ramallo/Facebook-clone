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
          
        />
    </div>
  )
}

export default StoryCard;