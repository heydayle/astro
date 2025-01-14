import BoxReveal from "@/components/ui/box-reveal";

export async function BoxRevealHeading() {
    return (
        <div className="px-6 items-center justify-center overflow-hidden pt-4">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                    DEVALOKA<span className="text-[#5046e6]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem]">
                    Frontend{" "}
                    <span className="text-[#5046e6]">Engineers</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-6">
                    <p>
                        -&gt; Meta Frameworks:
                        <span className="font-semibold text-[#5046e6]"> Next</span>,
                        <span className="font-semibold text-[#42b883]"> Nuxt</span>,
                        <span className="font-semibold"> Astro</span>
                        . <br />
                        -&gt; Javascript Frameworks:
                        <span className="font-semibold text-[#42b883]"> Vue</span>,
                        <span className="font-semibold text-[#5046e6]"> React</span>
                        . <br />
                        -&gt; Programing Languages:
                        <span className="font-semibold text-[#5046e6]"> Javascript</span>,
                        <span className="font-semibold text-[#5046e6]"> Typescript</span>
                        . <br />
                        -&gt; UI Frameworks:
                        <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
                        <span className="font-semibold text-[#5046e6]"> Shadcn</span>,
                        <span className="font-semibold text-[#5046e6]"> Vuetify</span>,
                        <span className="font-semibold text-[#5046e6]"> Flowbite</span>...
                    </p>
                </div>
            </BoxReveal>
        </div>
    );
}
