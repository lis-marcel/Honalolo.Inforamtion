export default function Input(props) {
    return <div className="flex flex-col gap-2 w-full">
        <label>{props.label}</label>
        <input type={props.type} value={props.value} onChange={(e) => props.onChange(e.target.value)} className="w-full px-3 py-1 text-[14px] bg-[var(--mgreen)] rounded-[0px] border-1 "/>
    </div>
}