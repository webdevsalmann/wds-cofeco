"use client"
import { reservationTimings } from "@/lib/const";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarDaysIcon, CalendarIcon, Clock, User } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns"
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Form() {
    const [date, setDate] = useState()

    return (
        <form className="w-full mx-auto sm:w-3/4 flex-center gap-6 flex-col" action="">
            <div className="w-full flex flex-col gap-2">
                <Label className="text-muted-foreground">
                    <CalendarDaysIcon className="inline" />
                    <span> Reserve My Table On</span>
                </Label>
                <Popover className="w-full">
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn("w-full justify-start text-left font-normal")}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>

            <div className="w-full  flex flex-col gap-2">
                <Label className="text-muted-foreground">
                    <Clock className="inline" />
                    <span> At </span>
                </Label>
                <Select className="w-full">
                    <SelectTrigger className="w-full hover:bg-accent">
                        <SelectValue placeholder="Select Timing" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Opening Hours</SelectLabel>
                            {
                                reservationTimings.map((item, i) => (
                                    <SelectItem key={i + item.label} value={item.value}>{item.label}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-full  flex flex-col gap-2">
                <Label className="text-muted-foreground">
                    <User className="inline" />
                    <span> For Total Of</span>
                </Label>
                <Select className="w-full">
                    <SelectTrigger className="w-full hover:bg-accent">
                        <SelectValue placeholder="Select persons" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Persons</SelectLabel>
                            <SelectItem value="1">1-person</SelectItem>
                            <SelectItem value="2">2-persons</SelectItem>
                            <SelectItem value="3">3-persons</SelectItem>
                            <SelectItem value="4">4-persons</SelectItem>
                            <SelectItem value="5">5-persons</SelectItem>
                            <SelectItem value="6">6-persons</SelectItem>
                            <SelectItem value="7">7-persons</SelectItem>
                            <SelectItem value="8">8-persons</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex-center">
                <Button>Book My Table</Button>
            </div>
        </form>
    )
}
