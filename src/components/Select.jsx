export default function Select(props) {
    return <div className="flex flex-col gap-2 w-full">
        <label>{props.label}</label>
        <select className="px-3 py-2 bg-[#eee] border-1 border-[#ccc] rounded-[8px] w-full">
            {props.options.map((item, index) => {
                return <option key={index} value={item.valueb}>
                    {item.label}
                </option>
            })}
        </select>
    </div>
}