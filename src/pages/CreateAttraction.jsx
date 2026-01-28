import Input from "../components/Input";
import Select from "../components/Select";

const categories = [
    { label: "Szlak", },
    { label: "Punkt widokowy", },
    { label: "Woda", },

];

export default function CreateAttraction() {
    return <div className="flex items-center justify-center p-4 pt-8">
        <div className="max-w-[600px] w-full flex flex-col gap-4">
            <h1>Nowa atrakcja</h1>

            <Input label="Nazwa atrakcji" />
            <Input label="Opis" type="textarea" />
            <Select label="Kategoria" options={categories} />
            <Input label="Lokalizacja" />
        </div>
    </div>
}