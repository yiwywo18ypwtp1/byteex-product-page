import SectionTitle from "@/components/SectionTitle";
import HeroGallery from "@/components/HeroGallery";
import Button from "@/components/Button";
import Divider from "@/components/Divider";

const FindLoveSection = () => {
    return (
        <section className="w-full flex flex-col items-center gap-6 py-10 bg-linear-to-t from-bge to-white">
            <SectionTitle text="Find something you love." />

            <p className="text-gry text-sm">Click below to browse our collection!</p>

            <HeroGallery leftImg="woman-16" centerImg="woman-8" rightImg="woman-5" />

            <div className="flex flex-col w-full items-center">
                <Button text="Customize Your Outfit" />

                <div className="w-full h-6 py-1 flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center gap-1">
                        <img src="svg/clock.svg" alt="" />
                        <p className="text-[#1FAD40] text-xs">Ships in 1-2 Days</p>
                    </div>

                    <Divider vertical />

                    <img src="img/payment-ways-list.png" alt="" className="h-5" />
                </div>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center md:w-full md:h-16 md:gap-5">
                <div className="flex items-center justify-center gap-3 w-50">
                    <div className="icon-bubble bg-gry/30!">
                        <img src="svg/delivery-gray.svg" alt="" />
                    </div>

                    <p className="text-gry text-sm">FREE Shipping on Orders over $200</p>
                </div>

                <Divider vertical />

                <div className="flex items-center justify-center gap-3 w-50">
                    <div className="icon-bubble bg-gry/30!">
                        <img src="svg/shield.svg" alt="" />
                    </div>

                    <p className="text-gry text-sm">Over 500+ 5 Star Reviews Online</p>
                </div>

                <Divider vertical />

                <div className="flex items-center justify-center gap-3 w-50">
                    <div className="icon-bubble bg-gry/30!">
                        <img src="svg/cart-gray.svg" alt="" />
                    </div>

                    <p className="text-gry text-sm">Made ethically and responsibly.</p>
                </div>
            </div>
        </section>
    )
}

export default FindLoveSection;