type CardProps = {
    svgUrl: string;
    title: string;
    text: string;
}

const ImpactCard = ({ svgUrl, title, text }: CardProps) => {
    return (
        <>
            <div className="w-full h-full md:w-65 md:h-auto flex flex-col items-center justify-center gap-3 md:self-stretch">
                <div className="icon-bubble bg-gry/30!">
                    <img src={svgUrl} alt="" className="" />
                </div>

                <h1 className="text-xl text-blu">{title}</h1>

                <p className="text-blu text-sm">{text}</p>
            </div>
        </>
    );
}

export default ImpactCard;