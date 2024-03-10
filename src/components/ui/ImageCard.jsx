import Image from "next/image";

export default function ImageCard({imgUrl}) {
  return (
    <div className="mb-4 w-full break-inside-avoid">
      <Image className="max-w-full rounded-lg" src={imgUrl} width={1600} height={900} alt="about" />
    </div>
  )
}
