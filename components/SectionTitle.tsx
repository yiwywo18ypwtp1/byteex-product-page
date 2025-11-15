type TitleProps = {
    text: string;
    centred?: boolean;
}

const SectionTitle = ({ text, centred = true }: TitleProps) => {
    return <h1 className={`text-blu text-2xl ${centred ? "text-center" : "text-start"} tracking-widest`}>
        {text}
    </h1>
}

export default SectionTitle;