import Button from "../Button";
import SectionTitle from "../SectionTitle";

import { client } from "@/lib/sanity/client";
import { aboutQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/urlFor";


const AboutSection = async () => {
    const data = await client.fetch(aboutQuery);

    const { title, text, topPhoto, centerPhoto, bottomPhoto } = data

    return (
        <section className="bg-lgt-gry py-10">
            <div className="w-full h-full md:hidden">
                <SectionTitle text={title} />

                <div className="flex items-center justify-center my-20 relative">
                    <div className="bg-lgt-gry p-1 absolute -top-12 left-14 z-20">
                        <img src={urlFor(topPhoto).url()} alt="" className="w-28 h-30 object-cover" />
                    </div>

                    <div className="z-10">
                        <img src={urlFor(centerPhoto).url()} alt="" className="w-60 h-78 object-cover" />
                    </div>

                    <div className="bg-lgt-gry p-1 absolute -bottom-12 right-14 z-20">
                        <img src={urlFor(bottomPhoto).url()} alt="" className="w-28 h-30 object-cover" />
                    </div>
                </div>

                <div className="px-8">
                    <p className="whitespace-pre-line text-gry text-sm leading-6">
                        {`${text}`}
                    </p>
                </div>
            </div>

            <div className="hidden md:flex md:flex-row md:items-center md:px-38 md:gap-5">
                <div className="flex items-center w-1/2 justify-center my-20 relative">
                    <div className="bg-lgt-gry p-1 absolute -top-12 left-14 z-20">
                        <img src={urlFor(topPhoto).url()} alt="" className="w-42 h-44 object-cover" />
                    </div>

                    <div className="z-10">
                        <img src={urlFor(centerPhoto).url()} alt="" className="w-95 h-144 object-cover" />
                    </div>

                    <div className="bg-lgt-gry p-1 absolute -bottom-12 right-14 z-20">
                        <img src={urlFor(bottomPhoto).url()} alt="" className="w-42 h-44 object-cover" />
                    </div>
                </div>

                <div className="w-1/2 flex flex-col items-start justify-between h-144">
                    <SectionTitle text={title} centred={false} />

                    <div className="">
                        <p className="whitespace-pre-line text-gry text-sm leading-6">
                            {`${text}`}
                        </p>
                    </div>

                    <Button text="Customize Your Outfit" />
                </div>
            </div >
        </section >
    )
}

export default AboutSection;