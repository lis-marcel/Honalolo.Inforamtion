export default function Button(props) {
    return <button {...props} className={`text-black rounded-[8px] py-2 px-3 bg-[var(--accent)] hover:brightness-110 cursor-pointer ${props.className}`} />
}