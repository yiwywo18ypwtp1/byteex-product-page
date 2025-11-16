import AsSeenIn from "../AsSeenIn";
import Button from "@/components/Button";
import ProductCarousel from "../ProductCarousel";
import SectionTitle from "../SectionTitle";
import Raiting from "@/components/Raiting";

const BrandsSections = () => {
    return (
        <section className="flex flex-col gap-6 pb-6">
            <div className="flex flex-col w-full items-center gap-3 bg-linear-to-b from-bge to-white pt-32 px-6" >
                <AsSeenIn />
            </div >

            {/* mobile */}
            <div className="flex flex-col gap-5 px-6 md:hidden">
                <SectionTitle text="Loungewear you can be proud of." />

                <ProductCarousel />

                <div className="flex flex-col items-center justify-center gap-0 *:flex *:flex-col *:items-center j*:ustify-center *:gap-4 *:my-6">
                    <div>
                        <div className="icon-bubble">
                            <img src="svg/cloud.svg" alt="" className="h-5" />
                        </div>

                        <SectionTitle text="Ethically sourced." />

                        <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                    </div>

                    <div className="border-t border-gry/30 w-full"></div>

                    <div>
                        <div className="icon-bubble">
                            <img src="svg/weather.svg" alt="" className="h-8" />
                        </div>

                        <SectionTitle text="Responsibly made." />

                        <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                    </div>

                    <div className="border-t border-gry/30 w-full"></div>

                    <div>
                        <div className="icon-bubble">
                            <img src="svg/leaf.svg" alt="" className="h-6" />
                        </div>

                        <SectionTitle text="Made for living in." />

                        <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                    </div>

                    <div className="border-t border-gry/30 w-full"></div>

                    <div>
                        <div className="icon-bubble">
                            <img src="svg/waves.svg" alt="" className="h-5" />
                        </div>

                        <SectionTitle text="Unimaginably comfortable." />

                        <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Button text="Customize Your Outfit" />
                    <Raiting />
                </div>
            </div>

            {/* desktop */}
            <div className="hidden md:flex md:flex-row md:items-stretch md:justify-between md:pl-36 md:h-[700px] md:pt-20 md:mb-20">
                <div className="flex flex-col justify-between h-full w-130">
                    <SectionTitle text="Loungewear you can be proud of." centred={false} />

                    <div className="flex flex-col items-center justify-center gap-0 *:flex *:flex-row *:items-start *:ustify-start *:gap-10 *:my-4">
                        <div>
                            <div className="icon-bubble">
                                <img src="svg/cloud.svg" alt="" className="h-5" />
                            </div>

                            <div>
                                <SectionTitle text="Ethically sourced." centred={false} />
                                <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                            </div>
                        </div>

                        <div>
                            <div className="icon-bubble">
                                <img src="svg/weather.svg" alt="" className="h-8" />
                            </div>

                            <div>
                                <SectionTitle text="Responsibly made." centred={false} />
                                <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                            </div>
                        </div>

                        <div>
                            <div className="icon-bubble">
                                <img src="svg/leaf.svg" alt="" className="h-6" />
                            </div>

                            <div>
                                <SectionTitle text="Made for living in." centred={false} />
                                <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                            </div>
                        </div>

                        <div>
                            <div className="icon-bubble">
                                <img src="svg/waves.svg" alt="" className="h-5" />
                            </div>

                            <div>
                                <SectionTitle text="Unimaginably comfortable." centred={false} />
                                <span className="w-60 text-center text-sm text-gry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </span>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductCarousel />
            </div>
        </section >
    );
}

export default BrandsSections;