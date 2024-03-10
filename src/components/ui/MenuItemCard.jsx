import Image from "next/image";

export default function MenuItemCard({title, description, price, imgUrl}) {
  return (
    <div className="relative w-full">
    <div className="w-full h-full flex gap-6">
      <div className="w-20 h-20 flex-center rounded overflow-hidden">
        <Image className="w-full h-full object-cover" src={imgUrl} width={1600} height={900} alt={title} />
      </div>

      <div className="flex-1">
        <div className="flex gap-2">
          <div className="text-xl">{title}</div>
          <div className="border-b-2 border-dotted flex-1"></div>
          <div className="text-xl font-bold text-primary">${price}</div>
        </div>

        <div className="w-4/5 text-xs sm:text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  </div>
  )
}
