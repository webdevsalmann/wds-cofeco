import Image from "next/image";

export default function Testimonial() {
    return (
        <section>
            <h2>What Our Regular Customer Says</h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">



                <div className="relative p-4 flex-center flex-col">
                    <div className="">⭐⭐⭐⭐⭐</div>
                    <p className="text-center">I&apos;ve been a regular at Cofeco for over a year now, and I can&apos;t imagine starting my day without their delicious coffee. The cozy atmosphere and friendly staff make it feel like a second home. Highly recommend!</p>
                    <div className="mt-4 w-16 h-16 flex-center rounded-full overflow-hidden">
                        <Image className="w-full h-full object-cover" src="/images/person/1.jpg" width={500} height={500} alt="person" />
                    </div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-muted-foreground">Graphic Designer</div>
                </div>


                <div className="relative p-4 flex-center flex-col">
                    <div className="">⭐⭐⭐⭐⭐</div>
                    <p className="text-center">As a busy teacher, I rely on Cofeco to fuel my mornings. Their espresso drinks are always perfectly crafted, and the pastries are to die for. It&apos;s my go-to spot for a little midday pick-me-up!</p>
                    <div className="mt-4 w-16 h-16 flex-center rounded-full overflow-hidden">
                        <Image className="w-full h-full object-cover" src="/images/person/2.jpg" width={500} height={500} alt="person" />
                    </div>
                    <div className="font-semibold">Sarah Mirza</div>
                    <div className="text-muted-foreground">Teacher</div>
                </div>



            </div>
        </section>
    )
}
