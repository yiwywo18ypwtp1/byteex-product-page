import SectionTitle from "@/components/SectionTitle";
import Accordion from "@/components/Accordion";
import ButtonRaitingBlock from "@/components/ButtonRaitingBlock";

const FAQSection = () => {
    return (
        <section className="flex flex-col gap-4 py-6 md:py-10 md:px-38">
            <div className="w-full px-10 md:hidden">
                <SectionTitle text="frequently asked questions." />
            </div>

            <div className="w-full px-8 md:hidden">
                <Accordion
                    items={[
                        {
                            title: "Lorem ipsum dolor sit amet",
                            text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                        },
                        {
                            title: "Lorem ipsum dolor sit amet",
                            text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                        },
                        {
                            title: "Lorem ipsum dolor sit amet",
                            text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                        },
                        {
                            title: "Lorem ipsum dolor sit amet",
                            text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                        },
                        {
                            title: "Lorem ipsum dolor sit amet",
                            text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                        },
                        {
                            title: "Lorem ipsum dolor sit amet",
                            text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                        },
                    ]}
                />
            </div>

            <div className="md:hidden w-full">
                <ButtonRaitingBlock />
            </div>

            <div className="hidden md:flex">
                <div className="flex flex-col justify-between">
                    <div className="w-full">
                        <SectionTitle text="Frequently asked questions." centred={false} />
                    </div>

                    <Accordion
                        items={[
                            {
                                title: "Lorem ipsum dolor sit amet",
                                text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                            },
                            {
                                title: "Lorem ipsum dolor sit amet",
                                text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                            },
                            {
                                title: "Lorem ipsum dolor sit amet",
                                text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                            },
                            {
                                title: "Lorem ipsum dolor sit amet",
                                text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                            },
                            {
                                title: "Lorem ipsum dolor sit amet",
                                text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                            },
                            {
                                title: "Lorem ipsum dolor sit amet",
                                text: "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
                            },
                        ]}
                    />
                </div>

                <div className="flex items-center justify-center my-20 relative w-1/2 ml-14">
                    <div
                        className="w-37 h-47 absolute left-32 -top-20 bg-linear-to-b to-bge object-cover z-10"
                    />

                    <div className="absolute -top-32 right-20 z-20">
                        <img src="img/woman-16.png" alt="" className="w-42 h-64 object-cover" />
                    </div>

                    <div className="z-30">
                        <img src="img/woman-7.png" alt="" className="w-57 h-85 object-cover" />
                    </div>

                    <div className="absolute -bottom-25 left-8 z-20">
                        <img src="img/woman-10.png" alt="" className="w-55 h-40 object-cover" />
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