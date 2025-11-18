import FeatureCarousel from "@/components/FeatureCarousel";
import Review from "@/components/Review";
import SectionTitle from "@/components/SectionTitle";
import ButtonRaitingBlock from "@/components/ButtonRaitingBlock";
import AutoScrollRow from "@/components/AutoScroll";

import { client } from "@/lib/sanity/client";
import { testimonialsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/urlFor";


const TestimonialsSection = async () => {
    const data = await client.fetch(testimonialsQuery);

    const { title, subtitle, photos, reviews } = data;

    const half = Math.ceil(photos.length / 2);
    const topPhotosRow = photos.slice(0, half);
    const bottomPhotosRow = photos.slice(half);

    return (
        <section className="flex flex-col items-center w-full gap-6 pb-6 md:pb-10">
            <SectionTitle text={title} />

            <p className="text-gry text-center px-6 md:px-0 md:w-2/3">{subtitle}</p>

            <div className="flex flex-col items-start justify-center gap-1 max-w-[99%] w-full px-2 md:hidden">
                <div className="flex flex-col gap-1 w-full overflow-x-scroll scroll-hide">
                    <div className="flex flex-row items-center gap-1">
                        {topPhotosRow.map((p: any, i: number) => (
                            <div key={i}>
                                <img
                                    src={urlFor(p).width(300).url()}
                                    className="w-25 h-25 min-w-25 min-h-25 object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row items-center gap-1">
                        {bottomPhotosRow.map((p: any, i: number) => (
                            <div key={i}>
                                <img
                                    src={urlFor(p).width(300).url()}
                                    className="w-25 h-25 min-w-25 min-h-25 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden md:flex md:flex-col md:items-center md:gap-1 md:max-w-[99%] md:w-full md:px-2">
                <AutoScrollRow speed={0.5}>
                    <div className="flex flex-col items-center w-full gap-1">
                        <div className="flex flex-row items-center gap-1">
                            {topPhotosRow.map((p: any, i: number) => (
                                <div key={i}>
                                    <img
                                        src={urlFor(p).width(300).url()}
                                        className="w-35 h-35 min-w-35 min-h-35 object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-row items-center gap-1">
                            {bottomPhotosRow.map((p: any, i: number) => (
                                <div key={i}>
                                    <img
                                        src={urlFor(p).width(300).url()}
                                        className="w-35 h-35 min-w-35 min-h-35 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </AutoScrollRow>
            </div>

            <FeatureCarousel dotted>
                {reviews.map((r: any) => (
                    <Review
                        key={r}
                        authorName={r.name}
                        photoUrl={r.photo ? urlFor(r.photo).url() : undefined}
                        text={r.text}
                        starsOnly={true}
                    />
                ))}
            </FeatureCarousel>

            <ButtonRaitingBlock />
        </section >
    );
}

export default TestimonialsSection;