export default function Button(props) {
    return <button {...props} className={`text-black rounded-[0px] py-2 px-4 bg-[var(--accent)] hover:brightness-110 cursor-pointer font-semibold border-1 ${props.className}`} />
}