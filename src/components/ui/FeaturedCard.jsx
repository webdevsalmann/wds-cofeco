import Image from "next/image";
import Link from "next/link";

export default function FeaturedCard({ imgUrl, title }) {
    return (
        <Link className={`relative aspect-[12/18] max-w-72 rounded-lg overflow-hidden border flex-1`} href="/">
            <div className="relative min-w-full aspect-[12/18] min-h-full overflow-hidden">
                <Image className="w-full h-full object-cover" src={imgUrl} width={1200} height={1800} alt={title} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-shadow">
                <div className="absolute p-4 bottom-0 w-full text-neutral-50">
                    <div className="">{title}</div>
                </div>
            </div>
        </Link>
    )
}
