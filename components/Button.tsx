const Button = ({ text: text }: { text: string }) => {
    return <button className="flex flex-row items-center justify-center gap-5 my-3 rounded-md text-white bg-blu hover:bg-blu/85 w-full h-14 md:w-90 md:h-14 cursor-pointer">
        <span>{text}</span>
        <img src="svg/arrow-r.svg" />
    </button>
}

export default Button;