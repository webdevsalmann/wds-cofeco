import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="section border-t">

      <div className="flex justify-around gap-6 flex-wrap">
        <div className="">
          <div className="font-semibold text-lg">Opening Hours</div>
          <ul className="mt-4 list-disc list-inside flex flex-col gap-2">
            <li>Monday - Friday:
              <div>~ 7:00 AM - 6:00 PM</div>
            </li>
            <li>Saturday - Sunday:
              <div>~ 8:00 AM - 5:00 PM</div>
            </li>
          </ul>
        </div>

        <div className="">
          <div className="font-semibold text-lg">Location</div>
          <div className="mt-4 list-disc list-inside flex flex-col gap-2">
            <div className="">cofeco,</div>
            <div className="">1234 Elm Street,</div>
            <div className="">Anytown, USA 12345</div>
          </div>
        </div>

        <div className="">
          <div className="font-semibold text-lg">Contact Info</div>
          <ul className="mt-4 list-disc list-inside flex flex-col gap-2">
            <li>Email:
              <div>~ info@cofeco.com</div>
            </li>
            <li>Phone:
              <div>~ (123) 456-7890</div>
            </li>
          </ul>
        </div>

        <div className="">
          <div className="font-semibold text-lg">Subscribe to Our Newsletter</div>
          <form className="mt-6 flex flex-col gap-2">
            <Input type="email" placeholder="Email" required/>
            <Button variant="secondary">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-muted-foreground text-sm text-center">
          &copy;Copyright2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> webdevsalmann</Link> 💖
        </p>
      </div>
    </footer>
  )
}
