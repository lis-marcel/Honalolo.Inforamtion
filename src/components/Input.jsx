export default function Input(props) {
    return <div className="flex flex-col gap-2 w-full">
        <label>{props.label}</label>
        <input type={props.type} value={props.value} onChange={(e) => props.onChange(e.target.value)} className="w-full px-3 py-2 bg-[#eee] rounded-[8px] border-1 border-[#ccc]"/>
    </div>
}