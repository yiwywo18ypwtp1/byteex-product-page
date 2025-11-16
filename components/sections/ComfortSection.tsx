import FeatureCarousel from "@/components/FeatureCarousel";
import InfoCard from "@/components/InfoCard";
import SectionTitle from "@/components/SectionTitle";
import ButtonRaitingBlock from "../ButtonRaitingBlock";


const ComfortSection = () => {
    return (
        <section className="py-10 md:py-16 flex flex-col items-center gap-5 md:gap-12">
            <SectionTitle text="Comfort Made Easy" />

            <div className="w-full md:hidden">
                <FeatureCarousel>
                    <InfoCard
                        title="You save."
                        text="Browse our comfort sets and save 15% when you bundle."
                        icon_url="svg/cart.svg"
                    />

                    <InfoCard
                        title="We ship."
                        text="We ship your items within 1-2 days of receiving your order."
                        icon_url="svg/delivery.svg"
                    />

                    <InfoCard
                        title="You enjoy."
                        text="Wear hernest around the house, out on the town, or in bed."
                        icon_url="svg/weather.svg"
                    />
                </FeatureCarousel>
            </div>

            <div className="hidden md:flex md:justify-center md:gap-10 md:w-full md:px-38">
                <InfoCard
                    title="You save."
                    text="Browse our comfort sets and save 15% when you bundle."
                    icon_url="svg/cart.svg"
                />

                <InfoCard
                    title="We ship."
                    text="We ship your items within 1-2 days of receiving your order."
                    icon_url="svg/delivery.svg"
                />

                <InfoCard
                    title="You enjoy."
                    text="Wear hernest around the house, out on the town, or in bed."
                    icon_url="svg/weather.svg"
                />
            </div>

            <ButtonRaitingBlock />
        </section>
    );
}

export default ComfortSection;