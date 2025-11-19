import SectionTitle from "@/components/SectionTitle";
import HeroGallery from "@/components/HeroGallery";
import Button from "@/components/Button";
import Divider from "@/components/Divider";

import { client } from "@/lib/sanity/client"
import { findloveQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/urlFor";


const FindLoveSection = async () => {
    const data = await client.fetch(findloveQuery);

    const { title, text, leftPhoto, centerPhoto, rightPhoto, featuresList } = data

    return (
        <section className="w-full flex flex-col items-center gap-6 py-10 bg-linear-to-t from-bge to-white">
            <SectionTitle text={title} />

            <p className="text-gry text-sm">{text}</p>

            <HeroGallery leftImg={urlFor(leftPhoto).url()} centerImg={urlFor(centerPhoto).url()} rightImg={urlFor(rightPhoto).url()} />

            <div className="flex flex-col w-full items-center px-6">
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
                {featuresList.map((f: any, i: number) => (
                    <div
                        key={i}
                        className="flex items-center justify-center gap-3 w-50 h-16"
                    >
                        <div className="icon-bubble bg-gry/30!">
                            <img src={f.svgUrl} alt="" />
                        </div>

                        <p className="text-gry text-sm">{f.text}</p>

                        {i !== featuresList.length - 1 && <Divider vertical />}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FindLoveSection;