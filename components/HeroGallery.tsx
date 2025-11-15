const HeroGallery = () => {
    return (
        <div className="flex flex-col items-center w-full md:w-fit">
            <div className="flex w-full justify-center items-center">
                <div
                    className="bg-linear-to-b from-[#fbf5ed2a] to-bge w-1/5 h-[80px] md:min-w-[140px] md:h-[200px] object-cover z-10"
                />

                <img
                    src="img/woman-2.png"
                    alt=""
                    className="-ml-8 md:-ml-14 w-1/4 md:min-w-[200px] md:h-[310px] object-cover z-20"
                />

                <img
                    src="img/woman-1.png"
                    alt=""
                    className="-ml-8 md:-ml-14 w-1/3 md:min-w-[260px] md:h-[420px] object-cover z-30"
                />

                <img
                    src="img/woman-3.png"
                    alt=""
                    className="-ml-8 md:-ml-14 w-1/4 md:min-w-[200px] md:h-[310px] object-cover z-20"
                />

                <div
                    className="bg-linear-to-b from-[#fbf5ed2a] to-bge -ml-8 md:-ml-14 w-1/5 h-[80px] md:min-w-[140px] md:h-[200px] object-cover z-10"
                />
            </div>
        </div>
    );
}

export default HeroGallery;