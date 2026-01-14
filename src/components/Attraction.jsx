import FeatherIcon from "feather-icons-react";
import image from "../assets/hero.jpg";
import Badge from "./Badge";
import Button from "./Button";
import { Link } from "react-router";

export default function Attraction() {
    return <Link to="/attraction/elo" className="rounded-[8px] bg-white shadow-md overflow-hidden">
        <div className="relative">
            <img className="aspect-[16/9] object-cover" src={image} />


            <Badge className="!border-0 absolute left-2 top-2 bg-white">SZLAK</Badge>
        </div>

        <div className="p-3 flex flex-col gap-1 items-start">
            <div className="w-full flex justify-between items-center">

                <Point
                    className="text-[#333]"
                    icon="map-pin"
                    label="Chłopia, Chłopowice"
                />

            </div>
            <h3 className="mt-1 text-[24px]">Nazwa atrakcji</h3>

            <div className="mt-3 flex flex-col gap-2">
                <Point icon="watch" label="Średni czas trwania: 5 godzin" />
                <Point icon="life-buoy" label="Poziom trudności: Trudny" />
                <Point icon="map" label="Dystans: 5400 m" />

                {/* <Point
                    icon="clock"
                    label={`Pn-Pt: 08:00 - 16:00
                        Sob: 10:00 - 14:00`}
                />

                <Point
                    icon="clock"
                    label={`Rozpoczęcie: 12.12.2012 08:00
                        Zakończenie: 12.12.2012: 16:00`}
                /> */}

                {/* <Point
                    icon="box"
                    label={`Kuchnia meksykańska`}
                /> */}



                {/* 
                <Point
                    icon="globe"
                    label="Angielski, Polski, Murckowski"
                /> */}

            </div>

            <div className="w-full mt-3 flex justify-between items-center">
                <p className="text-[16px]">Cena od: 500 zł</p>

                <Button className="!py-1.5 text-[14px]">Zobacz więcej</Button>
            </div>
        </div>
    </Link>
}

export function Point(props) {
    return <div className={`flex gap-2 ${props.className}`}>
        <FeatherIcon icon={props.icon} size={20} />
        <p className="text-[14px] whitespace-pre-line">{props.label}</p>
    </div>

}