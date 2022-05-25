import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div>
        <Image
          className="rounded-full"
          objectFit="cover"
          src={src}
          width
        />
    </div>
  )
}

export default Contact;