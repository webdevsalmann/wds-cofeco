import Image from "next/image";

export default function About() {
    return (
        <>
            <section id="about">
                <h2 className="md:text-center">About cofeco</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex justify-center flex-col">
                        <h3 className="text-left">Introduction</h3>
                        <p className="text-muted-foreground">At cofeco, we&apos;re more than just a place to grab your morning caffeine fix. Our journey began with a simple love for exceptional coffee and a desire to create a welcoming space where every customer feels at home. Since 1990, we&apos;ve been dedicated to serving up handcrafted beverages made with the finest ingredients and brewed with care. Our mission is to elevate your coffee experience, one sip at a time.</p>
                    </div>
                    <div className="p-4 flex-center">
                        <Image src="/images/common/1.jpg" width={1600} height={900} alt="about" />
                    </div>
                </div>

                <div className="mt-12 p-4 bg-muted rounded ">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="p-4 flex justify-center flex-col md:col-span-2">
                            <h3>Our Team</h3>
                            <p className="text-muted-foreground">Behind every cup of coffee at cofeco is a team of passionate individuals committed to delivering excellence. Meet our baristas, the heart and soul of our operation, who pour their expertise and creativity into every latte art masterpiece. Led by John Doe, our team is united by a shared love for coffee and a commitment to providing exceptional service. Together, we strive to create memorable experiences for each and every customer who walks through our doors.</p>
                        </div>
                        <div className="p-4 flex-center">
                            <Image src="/images/common/person.jpg" width={1600} height={900} alt="about" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
