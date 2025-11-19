import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import Review from "@/components/Review";
import HeroGallery from "@/components/HeroGallery";

import { client } from "@/lib/sanity/client";
import { heroQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/urlFor";


const HeroSection = async () => {
    const data = await client.fetch(heroQuery);

    const { title, leftPhoto, centerPhoto, rightPhoto, review, featuresList } = data;

    const leftImg = urlFor(leftPhoto).url();
    const centerImg = urlFor(centerPhoto).url();
    const rightImg = urlFor(rightPhoto).url();

    return (
        <section className="flex flex-col items-center mt-4 px-6 relative pb-28 md:mt-10">
            {/* mobile */}
            <div className="flex flex-col gap-5 items-center md:hidden">
                <img src="img/byteex_logo.png" alt="" className="w-50" />

                <SectionTitle text={title} />

                <HeroGallery leftImg={leftImg} centerImg={centerImg} rightImg={rightImg} />

                <ul className="flex flex-col w-full px-4 gap-3 *:flex *:flex-row *:items-center *:gap-4 ">
                    {featuresList.map((f: any, i: number) => (
                        <li key={i}>
                            <div className="icon-bubble">
                                <img src={f.svgUrl} alt="" />
                            </div>
                            <p className="text-gry text-sm">{f.text}</p>
                        </li>
                    ))}
                </ul>

                <Button text="Customize your outfit" />

                <div className="absolute left-0 right-0 -bottom-24 flex justify-center">
                    <Review
                        authorName={review.name}
                        photoUrl={urlFor(review.photo).url()}
                        text={review.text}
                    />
                </div>
            </div>

            {/* desktop */}
            <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-32 md:w-full">
                <div className="flex flex-col gap-6 items-start">
                    <img src="img/byteex_logo.png" alt="" className="w-50" />
                    <h1 className="text-blu text-2xl text-center md:text-5xl md:text-start tracking-widest">Don’t apologize for being comfortable.</h1>

                    <ul className="flex flex-col w-full gap-5 *:flex *:flex-row *:items-center *:gap-4 ">
                        {featuresList.map((f: any, i: number) => (
                            <li key={i}>
                                <div className="bg-bge p-1 rounded-full min-w-8 min-h-8 flex items-center justify-center">
                                    <img src={f.svgUrl} alt="" />
                                </div>
                                <p className="text-gry text-sm">Beautiful, comfortable loungewear for day or night.</p>
                            </li>
                        ))}
                    </ul>

                    <Button text="Customize your outfit" />

                    <div className="absolute left-38 right-0 -bottom-24 flex justify-center md:justify-start">
                        <Review
                            authorName={review.name}
                            photoUrl={urlFor(review.photo).url()}
                            text={review.text}
                        />
                    </div>
                </div>

                <HeroGallery leftImg={leftImg} centerImg={centerImg} rightImg={rightImg} />
            </div>
        </section >
    );
}

export default HeroSection;