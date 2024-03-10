import Image from "next/image";
import Form from "./Form";

export default function page() {
  return (
    <section>
      <h2>Reservation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Form />
        <div className="flex-center">
          <Image src="/images/svgs/coffee-chat.svg" width={500} height={500} alt="about" />
        </div>
      </div>
    </section>
  )
}
