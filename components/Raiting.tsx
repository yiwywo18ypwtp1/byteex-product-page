import RaitingStars from "./RaitingStarts";

const Raiting = ({ starsOnly: starsOnly = false }: { starsOnly?: boolean }) => {
    return <div className="flex gap-2">
        <RaitingStars />

        {starsOnly
            ? null
            : <span className="text-xs text-gry">
                One of 500+ 5 Star Reviews Online
            </span>
        }
    </div>
}

export default Raiting;