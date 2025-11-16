import FeatureCarousel from "@/components/FeatureCarousel";
import Review from "@/components/Review";
import SectionTitle from "@/components/SectionTitle";
import ButtonRaitingBlock from "@/components/ButtonRaitingBlock";

const topRow = [
    "img/woman-8.png",
    "img/woman-9.png",
    "img/woman-10.png",
    "img/woman-11.png",
]

const bottomRow = [
    "img/woman-12.png",
    "img/woman-13.png",
    "img/woman-14.png",
    "img/woman-15.png",
]

const topRowDesk = [
    "img/woman-8.png",
    "img/woman-9.png",
    "img/woman-13.png",
    "img/woman-14.png",
    "img/woman-10.png",
    "img/woman-11.png",
    "img/woman-8.png",
    "img/woman-9.png",
    "img/woman-14.png",
    "img/woman-15.png",
    "img/woman-12.png",
]

const bottomRowDesk = [
    "img/woman-10.png",
    "img/woman-9.png",
    "img/woman-12.png",
    "img/woman-8.png",
    "img/woman-13.png",
    "img/woman-8.png",
    "img/woman-14.png",
    "img/woman-11.png",
    "img/woman-15.png",
    "img/woman-14.png",
    "img/woman-9.png",
]

const TestimonialsSection = () => {
    return (
        <section className="flex flex-col items-center w-full gap-6 pb-6 md:pb-10">
            <SectionTitle text="What our fans saying?" />

            <p className="text-gry text-center px-6 md:px-0 md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</p>

            <div className="flex flex-col gap-1 w-full md:hidden">
                <div className="flex flex-row items-center justify-center gap-1">
                    {topRow.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            className="w-25 h-25 object-cover"
                        />
                    ))}
                </div>

                <div className="flex flex-row items-center justify-center gap-1">
                    {bottomRow.map((src, i) => (
                        <div key={i}>
                            <img
                                src={src}
                                className="w-25 h-25 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden md:flex md:flex-col md:gap-1 md:w-full">
                <div className="flex flex-row items-center justify-center gap-1">
                    {topRowDesk.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            className="w-35 h-35 object-cover"
                        />
                    ))}
                </div>

                <div className="flex flex-row items-center justify-center gap-1">
                    {bottomRowDesk.map((src, i) => (
                        <div key={i}>
                            <img
                                src={src}
                                className="w-35 h-35 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <FeatureCarousel dotted>
                <Review
                    authorName="Jane S"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi."
                    starsOnly={true}
                />
                <Review
                    authorName="Jane S"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales."
                    starsOnly={true}
                />
                <Review
                    authorName="Jane S"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi."
                    starsOnly={true}
                />
            </FeatureCarousel>

            <ButtonRaitingBlock />
        </section>
    );
}

export default TestimonialsSection;