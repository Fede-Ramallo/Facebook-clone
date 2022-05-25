import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="flex">
        <Image
          className="rounded-full"
          objectFit="cover"
          src={src}
          width={50}
          height={50}
          layout="fixed"
        />
        <p>{name}</p>
    </div>
  )
}

export default Contact;