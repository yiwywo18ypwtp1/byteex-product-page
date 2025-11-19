import SectionTitle from "@/components/SectionTitle";
import Divider from "@/components/Divider";
import ImpactCard from "@/components/ImpactCard";

import { client } from "@/lib/sanity/client";
import { impactQuery } from "@/lib/sanity/queries";


const ImpactSection = async () => {
    const data = await client.fetch(impactQuery);

    const { title, featuresList } = data

    return (
        <section className="bg-lgt-gry flex flex-col py-10 mt-16">
            <SectionTitle text={title} />

            <div className="flex flex-col gap-11 py-5 px-15 max-h-110 overflow-y-scroll scroll-hide md:hidden">

                <Divider />

                {featuresList.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col gap-11">
                        <ImpactCard
                            svgUrl={item.svgUrl}
                            title={item.title}
                            text={item.text}
                        />
                        <Divider />
                    </div>
                ))}

            </div>

            <div className="
                hidden md:flex md:flex-row md:gap-11 md:py-5 md:px-15 
                md:max-h-110 md:h-55 md:overflow-x-scroll scroll-hide 
                md:items-stretch md:justify-center
            ">
                <Divider vertical />

                {featuresList.map((item: any, index: number) => (
                    <div key={index} className="flex flex-row items-stretch">
                        <ImpactCard
                            svgUrl={item.svgUrl}
                            title={item.title}
                            text={item.text}
                        />
                        <Divider vertical />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default ImpactSection;