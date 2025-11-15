import Raiting from "./Raiting";

type ReviewProps = {
    author_name: string;
    photo_url: string;
    is_raiting?: boolean;
    text: string;
};

const Review = ({ author_name, photo_url, is_raiting = true, text }: ReviewProps) => {
    return (
        <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg border p-4 border-black/10 h-fit w-full md: md:max-w-110">
            <div className="flex flex-row gap-3 items-center">
                <img src={photo_url} alt="" className="h-10 w-10 rounded-full" />

                <div className="flex flex-col gap-1 w-full md:gap-3 md:flex-row-reverse md:items-center md:justify-between">
                    {is_raiting &&
                        <>
                            <Raiting />
                        </>
                    }

                    <span className="text-gry text-sm">{author_name}</span>
                </div>
            </div>

            <span className="text-gry text-xs leading-6">
                {text}
            </span>
        </div>
    );
}

export default Review;