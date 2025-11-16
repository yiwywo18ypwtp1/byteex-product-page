import Raiting from "./Raiting";

type ReviewProps = {
    authorName: string;
    photoUrl?: string;
    isRaiting?: boolean;
    starsOnly?: boolean;
    text: string;
};

const Review = ({ authorName, photoUrl: photoUrl = "", isRaiting: isRaiting = true, starsOnly = false, text }: ReviewProps) => {
    return (
        <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg border p-4 mx-4 border-black/10 h-fit w-full md:mx-0 md:max-w-110">
            <div className="flex flex-row gap-3 items-center">
                {photoUrl
                    ? < img src={photoUrl} alt="" className="min-h-10 min-w-10 w-10 h-10 rounded-full" />
                    : <div className="min-h-10 min-w-10 w-10 h-10 rounded-full bg-blu"></div>
                }

                <div className="flex flex-col gap-1 w-full md:gap-3 md:flex-row-reverse md:items-center md:justify-between">
                    {isRaiting &&
                        <>
                            <Raiting starsOnly={starsOnly} />
                        </>
                    }

                    <span className="text-gry text-sm">{authorName}</span>
                </div>
            </div>

            <span className="text-gry text-xs leading-6">
                {text}
            </span>
        </div >
    );
}

export default Review;