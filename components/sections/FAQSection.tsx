import SectionTitle from "@/components/SectionTitle";
import Accordion from "@/components/Accordion";
import ButtonRaitingBlock from "@/components/ButtonRaitingBlock";

import { client } from "@/lib/sanity/client"
import { faqQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/urlFor";


const FAQSection = async () => {
    const data = await client.fetch(faqQuery);

    const { title, topPhoto, centerPhoto, bottomPhoto, questions } = data

    return (
        <section className="flex flex-col gap-4 py-6 md:py-10 md:px-38">
            <div className="w-full px-10 md:hidden">
                <SectionTitle text={title} />
            </div>

            <div className="w-full px-8 md:hidden">
                <Accordion items={questions} />
            </div>

            <div className="md:hidden w-full">
                <ButtonRaitingBlock />
            </div>

            <div className="hidden md:flex">
                <div className="flex flex-col justify-between">
                    <div className="w-full">
                        <SectionTitle text="Frequently asked questions." centred={false} />
                    </div>

                    <Accordion items={questions} />
                </div>

                <div className="flex items-center justify-center my-20 relative w-1/2 ml-14">
                    <div
                        className="w-37 h-47 absolute left-32 -top-20 bg-linear-to-b to-bge object-cover z-10"
                    />

                    <div className="absolute -top-32 right-20 z-20">
                        <img src={urlFor(topPhoto).url()} alt="" className="w-42 h-64 object-cover" />
                    </div>

                    <div className="z-30">
                        <img src={urlFor(centerPhoto).url()} alt="" className="w-57 h-85 object-cover" />
                    </div>

                    <div className="absolute -bottom-25 left-8 z-20">
                        <img src={urlFor(bottomPhoto).url()} alt="" className="w-55 h-40 object-cover" />
                    </div>

                    <div
                        className="w-37 h-47 absolute right-32 -bottom-10 bg-linear-to-b to-bge object-cover z-10"
                    />
                </div>
            </div>
        </section>
    );
}

export default FAQSection;