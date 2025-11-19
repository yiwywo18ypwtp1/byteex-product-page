import FeatureCarousel from "@/components/FeatureCarousel";
import InfoCard from "@/components/InfoCard";
import SectionTitle from "@/components/SectionTitle";
import ButtonRaitingBlock from "../ButtonRaitingBlock";

import { client } from "@/lib/sanity/client";
import { comfortQuery } from "@/lib/sanity/queries";


const ComfortSection = async () => {
    const data = await client.fetch(comfortQuery);

    const { title, featuresList } = data;

    console.log("comfort data" + data);

    return (
        <section className="py-10 md:py-16 flex flex-col items-center gap-5 md:gap-12">
            <SectionTitle text={title} />

            <div className="w-full md:hidden">
                <FeatureCarousel>
                    {featuresList.map((f: any, i: number) => (
                        <InfoCard
                            key={i}
                            title={f.title}
                            text={f.text}
                            iconUrl={f.svgUrl}
                        />
                    ))}
                </FeatureCarousel>
            </div>

            <div className="hidden md:flex md:justify-center md:gap-10 md:w-full md:px-38">
                {featuresList.map((f: any, i: number) => (
                    <InfoCard
                        key={i}
                        title={f.title}
                        text={f.text}
                        iconUrl={f.svgUrl}
                    />
                ))}
            </div>

            <ButtonRaitingBlock />
        </section>
    );
}

export default ComfortSection;