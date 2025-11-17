import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import Review from "@/components/Review";
import HeroGallery from "@/components/HeroGallery";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center mt-4 px-6 relative pb-28 md:mt-10">
            {/* mobile */}
            <div className="flex flex-col gap-5 items-center md:hidden">
                <img src="img/byteex_logo.png" alt="" className="w-50" />

                <SectionTitle text="Don’t apologize for being comfortable." />

                <HeroGallery />

                <ul className="flex flex-col w-full px-4 gap-3 *:flex *:flex-row *:items-center *:gap-4 ">
                    <li>
                        <div className="icon-bubble">
                            <img src="svg/weather.svg" alt="" />
                        </div>
                        <p className="text-gry text-sm">Beautiful, comfortable loungewear for day or night.</p>
                    </li>
                    <li>
                        <div className="icon-bubble">
                            <img src="svg/cart.svg" alt="" />
                        </div>
                        <p className="text-gry text-sm">No wasteful extras, like tags or plastic packaging.</p>
                    </li>
                    <li>
                        <div className="icon-bubble">
                            <img src="svg/waves.svg" alt="" />
                        </div>
                        <p className="text-gry text-sm">Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
                    </li>
                </ul>

                <Button text="Customize your outfit" />

                <div className="absolute left-0 right-0 -bottom-24 flex justify-center">
                    <Review
                        authorName="Jane S"
                        photoUrl="img/jane-s.png"
                        text="Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them."
                    />
                </div>
            </div>

            {/* desktop */}
            <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-32 md:w-full">
                <div className="flex flex-col gap-6 items-start">
                    <img src="img/byteex_logo.png" alt="" className="w-50" />
                    <h1 className="text-blu text-2xl text-center md:text-5xl md:text-start tracking-widest">Don’t apologize for being comfortable.</h1>

                    <ul className="flex flex-col w-full gap-5 *:flex *:flex-row *:items-center *:gap-4 ">
                        <li>
                            <div className="bg-bge p-1 rounded-full min-w-8 min-h-8 flex items-center justify-center">
                                <img src="svg/weather.svg" alt="" />
                            </div>
                            <p className="text-gry text-sm">Beautiful, comfortable loungewear for day or night.</p>
                        </li>
                        <li>
                            <div className="bg-bge p-1 rounded-full min-w-8 min-h-8 flex items-center justify-center">
                                <img src="svg/cart.svg" alt="" />
                            </div>
                            <p className="text-gry text-sm">No wasteful extras, like tags or plastic packaging.</p>
                        </li>
                        <li>
                            <div className="bg-bge p-1 rounded-full min-w-8 min-h-8 flex items-center justify-center">
                                <img src="svg/waves.svg" alt="" />
                            </div>
                            <p className="text-gry text-sm">Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
                        </li>
                    </ul>

                    <Button text="Customize your outfit" />

                    <div className="absolute left-38 right-0 -bottom-24 flex justify-center md:justify-start">
                        <Review
                            authorName="Jane S"
                            photoUrl="img/jane-s.png"
                            text="Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them."
                        />
                    </div>
                </div>

                <HeroGallery />
            </div>
        </section >
    );
}

export default HeroSection;