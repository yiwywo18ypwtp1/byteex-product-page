import SectionTitle from "@/components/SectionTitle";
import Divider from "@/components/Divider";
import ImpactCard from "@/components/ImpactCard";

const ImpactSection = () => {
    return (
        <section className="bg-lgt-gry flex flex-col py-10 mt-16">
            <SectionTitle text="Our Total Green Impact" />

            <div className="flex flex-col gap-11 py-5 px-15 max-h-110 overflow-y-scroll scroll-hide md:hidden">
                <Divider />

                <ImpactCard
                    svgUrl="svg/co2.svg"
                    title="3,927 kg"
                    text="of CO2 saved"
                />

                <Divider />

                <ImpactCard
                    svgUrl="svg/h2o.svg"
                    title="2,546,167 days"
                    text="of drinking water saved"
                />

                <Divider />

                <ImpactCard
                    svgUrl="svg/energy.svg"
                    title="7,321 kWh"
                    text="of energy saved"
                />

                <Divider />
            </div>

            <div className="hidden md:flex md:flex-row md:gap-11 md:py-5 md:px-15 md:max-h-110 md:h-55 md:overflow-x-scroll scroll-hide md:items-stretch md:justify-center">
                <Divider vertical />

                <ImpactCard
                    svgUrl="svg/co2.svg"
                    title="3,927 kg"
                    text="of CO2 saved"
                />

                <Divider vertical />

                <ImpactCard
                    svgUrl="svg/h2o.svg"
                    title="2,546,167 days"
                    text="of drinking water saved"
                />

                <Divider vertical />

                <ImpactCard
                    svgUrl="svg/h2o.svg"
                    title="2,546,167 days"
                    text="of drinking water saved"
                />

                <Divider vertical />
            </div>
        </section >
    )
}

export default ImpactSection;