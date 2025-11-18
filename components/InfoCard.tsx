import SectionTitle from "./SectionTitle";

type CardProps = {
    text: string;
    title: string;
    iconUrl: string;
}

const InfoCard = ({ text, title, iconUrl }: CardProps) => {
    return (
        <div className="relative bg-lgt-gry rounded-lg w-70 h-70 md:w-80 md:h-80 flex flex-col px-5 py-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <SectionTitle text={title} />
            </div>

            <div className="flex justify-center">
                <img src={iconUrl} alt="" className="min-w-8 min-h-8" />
            </div>

            <div className="flex justify-center mt-auto text-center">
                <p className="text-gry">{text}</p>
            </div>
        </div>
    );
}

export default InfoCard;