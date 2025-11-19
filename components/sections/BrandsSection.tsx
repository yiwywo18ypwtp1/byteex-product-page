import AsSeenIn from "../AsSeenIn";
import Button from "@/components/Button";
import ProductCarousel from "../ProductCarousel";
import SectionTitle from "../SectionTitle";
import Raiting from "@/components/Raiting";

import { client } from "@/lib/sanity/client";
import { brandsQuery } from "@/lib/sanity/queries";


const BrandsSections = async () => {
    const data = await client.fetch(brandsQuery);

    const { title, carouselPhotos, logoPhotos, featuresList } = data;

    return (
        <section className="flex flex-col gap-6 pb-6">
            <div className="flex flex-col w-full items-center gap-3 bg-linear-to-b from-bge to-white pt-32 px-6" >
                <AsSeenIn logos={logoPhotos} />
            </div >

            <div className="flex flex-col gap-5 px-6 md:hidden">
                <SectionTitle text={title} />

                <ProductCarousel images={carouselPhotos} />

                <div className="flex flex-col items-center justify-center gap-0 *:flex *:flex-col *:items-center j*:ustify-center *:gap-4 *:my-6">
                    {featuresList.map((f: any, i: number) => (
                        <div key={i}>
                            <div className="icon-bubble">
                                <img src={f.svgUrl} alt="" className="h-5" />
                            </div>

                            <SectionTitle text={f.title} />

                            <span className="w-60 text-center text-sm text-gry">{f.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center">
                    <Button text="Customize Your Outfit" />
                    <Raiting />
                </div>
            </div>

            <div className="hidden md:flex md:flex-row md:items-stretch md:justify-between md:pl-36 md:h-[700px] md:pt-20 md:mb-20">
                <div className="flex flex-col justify-between h-full w-130">
                    <SectionTitle text="Loungewear you can be proud of." centred={false} />

                    <div className="flex flex-col items-center justify-center gap-0 *:flex *:flex-row *:items-start *:ustify-start *:gap-10 *:my-4">
                        {featuresList.map((f: any, i: number) => (
                            <div key={i}>
                                <div className="icon-bubble">
                                    <img src={f.svgUrl} alt="" className="h-5" />
                                </div>

                                <div>
                                    <SectionTitle text={f.title} centred={false} />
                                    <span className="w-60 text-center text-sm text-gry">{f.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <ProductCarousel images={carouselPhotos} />
            </div>
        </section >
    );
}

export default BrandsSections;