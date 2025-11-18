import { urlFor } from "@/lib/sanity/urlFor";

type GalleryProps = {
    leftImg: string;
    centerImg: string;
    rightImg: string;
}

const HeroGallery = ({ leftImg, centerImg, rightImg }: GalleryProps) => {
    return (
        <div className="flex flex-col items-center w-full md:w-fit">
            <div className="flex w-full justify-center items-center">
                <div
                    className="bg-linear-to-b from-bge/30 to-bge w-1/5 min-h-[80px] h-[80px] md:min-w-[140px] md:h-[200px] object-cover z-10"
                />

                <div className="-ml-8 md:-ml-14 w-1/4 h-36 md:min-w-[200px] md:h-[310px] z-20">
                    <img
                        src={leftImg}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="-ml-8 md:-ml-14 w-1/3 h-50 md:min-w-[260px] md:h-[420px] z-30">
                    <img
                        src={centerImg}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="-ml-8 md:-ml-14 w-1/4 h-36 md:min-w-[200px] md:h-[310px] z-20">
                    <img
                        src={rightImg}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>

                <div
                    className="bg-linear-to-b from-bge/30 to-bge -ml-8 md:-ml-14 w-1/5 min-h-[80px] h-[80px] md:min-w-[140px] md:h-[200px] object-cover z-10"
                />
            </div>
        </div>
    );
}

export default HeroGallery;