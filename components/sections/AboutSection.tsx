import Button from "../Button";
import SectionTitle from "../SectionTitle";

const AboutSection = () => {
    return (
        <section className="bg-[#F0EEEF] py-10">
            <div className="w-full h-full md:hidden">
                <SectionTitle text="Be your best self." />

                <div className="flex items-center justify-center my-20 relative">
                    <div className="bg-[#F0EEEF] p-1 absolute -top-12 left-14 z-20">
                        <img src="img/woman-5.png" alt="" className="w-28 h-30 object-cover" />
                    </div>

                    <div className="z-10">
                        <img src="img/woman-7.png" alt="" className="w-60 h-78 object-cover" />
                    </div>

                    <div className="bg-[#F0EEEF] p-1 absolute -bottom-12 right-14 z-20">
                        <img src="img/woman-6.png" alt="" className="w-28 h-30 object-cover" />
                    </div>
                </div>

                <div className="px-8">
                    <p className="whitespace-pre-line text-gry text-sm leading-6">
                        {`Hi! My name’s [Insert Name], and I founded [Insert] in ____. 

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 

                    Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula. 

                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. 

                    Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. 

                    Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien. 

                    Cras mattis varius mollis.`}
                    </p>
                </div>
            </div>

            <div className="hidden md:flex md:flex-row md:items-center md:px-38 md:gap-5">
                <div className="flex items-center w-1/2 justify-center my-20 relative">
                    <div className="bg-[#F0EEEF] p-1 absolute -top-12 left-14 z-20">
                        <img src="img/woman-5.png" alt="" className="w-42 h-44 object-cover" />
                    </div>

                    <div className="z-10">
                        <img src="img/woman-7.png" alt="" className="w-95 h-144 object-cover" />
                    </div>

                    <div className="bg-[#F0EEEF] p-1 absolute -bottom-12 right-14 z-20">
                        <img src="img/woman-6.png" alt="" className="w-42 h-44 object-cover" />
                    </div>
                </div>

                <div className="w-1/2 flex flex-col items-start justify-between h-144">
                    <SectionTitle text="Be your best self." centred={false} />

                    <div className="">
                        <p className="whitespace-pre-line text-gry text-sm leading-6">
                            {`Hi! My name’s [Insert Name], and I founded [Insert] in ____. 

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 

                            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula. 

                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. 

                            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. 

                            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien. 

                            Cras mattis varius mollis.`}
                        </p>
                    </div>

                    <Button text="Customize Your Outfit" />
                </div>
            </div >
        </section >
    )
}

export default AboutSection;