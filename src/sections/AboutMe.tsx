import about_me from "../../public/manjurulislam.png";

export default function AboutMe() {
  return (
    <section
      className="mt-[113px] bg-white rounded-xl overflow-hidden"
      id="about-me"
    >
      <div>
        <div className="flex justify-between gap-11 items-center">
          <div className="w-[579.204px] h-[579.204px]">
            <img
              src={about_me}
              className="w-full h-full"
              alt="Manjurul islam designer"
            />
          </div>
          <div className="flex flex-col gap-10 w-1/2">
            <h3 className="text-[#1D2939] text-4xl leading-[48px] font-rocBold tracking-[-1.08px] !text-left">
              Product designer with <br /> Design systems expertise.
            </h3>
            <p className="text-xl font-rocReg tracking-[-0.6px] text-[#475467] !text-left">
              I’m a Product Designer with over 5 years of expertise in crafting
              intuitive user interfaces and developing scalable design systems.
              Proven ability to lead cross-functional teams, solve complex
              design challenges, and deliver user-centered solutions that align
              with business goals.
              <br />
              <br />I always adept at translating user needs into innovative
              designs, with a focus on efficiency, creativity, and attention to
              detail.
            </p>
            <div>
              <button className="flex items-center gap-2 text-[#00432B] font-rocMid">
                <span>Learn more</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M4.4635 10.0001H16.1302M16.1302 10.0001L10.2968 4.16675M16.1302 10.0001L10.2968 15.8334"
                      stroke="#00432B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
