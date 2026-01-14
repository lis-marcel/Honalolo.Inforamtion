import image from "../assets/hero.jpg";
import Attraction from "../components/Attraction";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

const continents = [
    { label: "Chłopyka" }
];

const countries = [
    { label: "Chłopia" }
];

const states = [
    { label: "Chłopskie" }
];

const cities = [
    { label: "Chłopowice" }
];


export default function HomePage() {
    return <div>
        <div className="relative">
            <img className="w-full h-[calc(100svh-58px)] sm:h-[400px] object-cover brightness-[40%]" src={image} />

            <div className={
                "p-4 w-full absolute left-[50%] top-[50%] translate-[-50%] text-white sm:text-center "
                + "flex flex-col gap-4 items-start sm:items-center"
            }>
                <h1 className="font-medium text-[42px] md:text-[48px] lg:text-[64px]"> Odkryj uroki twojego regionu </h1>
                <p className="text-[14px] sm:text-[16px]">Poznaj najciekawsze miejsca, szlaki i wydarzenia w okolicy. Znajdziesz tu praktyczne informacje o atrakcjach, restauracjach i możliwościach aktywnego wypoczynku — wszystko, czego potrzebujesz, by zaplanować udaną podróż.</p>
            </div>
        </div>

        <div className="mt-4 p-4 m-auto max-w-[var(--page-width)] ">
            <div className="p-4 bg-white rounded-[8px] shadow-sm">
                <h2 className="font-medium text-[24px] md:text-[32px]">Wyszukiwarka</h2>

                <div className="my-4 grid grid-cols-4 gap-4">
                    <Select label="Kontynent" options={continents} />
                    <Select label="Kraj" options={countries} />
                    <Select label="Region" options={states} />
                    <Select label="Miasto" options={cities} />

                    <div style={{gridColumn:"1/5"}} className="w-full grid grid-cols-[3fr_2fr_2fr] gap-4">
                        <Select label="Typ atrakcji" options={continents} />
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="Data rozpoczęcia" type="date" />
                            <Input label="Godzina rozpoczęcia" type="time" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Input label="Data zakończenia" type="date" />
                            <Input label="Godzina zakończenia" type="time" />
                        </div>
                    </div>
                </div>

                <Button>Szukaj</Button>
            </div>
        </div>

        <div className="p-4 m-auto max-w-[var(--page-width)] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            <Attraction />
            <Attraction />
            <Attraction />
            <Attraction />
            <Attraction />
            <Attraction />
        </div>
    </div>
}