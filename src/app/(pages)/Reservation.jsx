import Form from "@/components/helper/Form";
import Image from "next/image";

export default function Reservation() {
  return (
    <section>
      <h2>Make a Reservation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Form />
        <div className="flex-center">
          <Image src="/images/svgs/coffee-chat.svg" width={500} height={500} alt="about" />
        </div>
      </div>
    </section>
  )
}
