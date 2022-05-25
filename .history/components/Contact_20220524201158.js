import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div>
        <Image
          className="rounded-full"
          src={src}
        />
    </div>
  )
}

export default Contact;