import CaseStudiesCard from "../components/CaseStudyCard";

export default function CaseStudy() {
  return (
    <div className="bg-white p-[100px] rounded-2xl">
      <div className="flex justify-between items-start mb-10">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[#1D2939] text-4xl font-rocBold">
            Noteworthy Case Studies
          </h3>
          <span className="text-[#949493] text-lg font-rocReg leading-7 tracking-[-0.54px]">
            Discover How Data-Driven Design Delivered Unparalleled Results.
          </span>
        </div>
        <button className="py-3 px-4 rounded-lg text-[#00432B] border border-[#00432B] font-rocMid text-lg">
          Explore more
        </button>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
        <CaseStudiesCard
          cardNumber={1}
          thumbnail="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"
        />
        <CaseStudiesCard
          cardNumber={2}
          thumbnail="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"
        />
        <CaseStudiesCard
          cardNumber={3}
          thumbnail="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"
        />
        <CaseStudiesCard
          cardNumber={4}
          thumbnail="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"
        />
      </div>
    </div>
  );
}
