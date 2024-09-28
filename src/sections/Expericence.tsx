export default function Expericence() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard1">
        <div className="flex flex-col gap-[20px] absolute bottom-[24px] left-[24px]">
          <h3 className="text-[72px] leading-[90px] font-rocMid text-[#255E4A]">
            4+
          </h3>
          <p className="text-base leading-7 text-[#5D6679] font-rocMid">
            Years of working experience
          </p>
        </div>
      </div>

      <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard2">
        <div className="flex flex-col gap-[20px] absolute bottom-[24px] left-[24px]">
          <h3 className="text-[72px] leading-[90px] font-rocMid text-[#255E4A]">
            10+
          </h3>
          <p className="text-base leading-7 text-[#5D6679] font-rocMid">
            Collaborate with brands
          </p>
        </div>
      </div>

      <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard3">
        <div className="flex flex-col gap-[20px] absolute bottom-[24px] left-[24px]">
          <h3 className="text-[72px] leading-[90px] font-rocMid text-[#255E4A]">
            50+
          </h3>
          <p className="text-base leading-7 text-[#5D6679] font-rocMid">
            Projects
          </p>
        </div>
      </div>

      <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard4">
        <div className="flex flex-col gap-[20px] absolute bottom-[24px] left-[24px]">
          <h3 className="text-[72px] leading-[90px] font-rocMid text-[#255E4A]">
            35+
          </h3>
          <p className="text-base leading-7 text-[#5D6679] font-rocMid">
            Happy clients
          </p>
        </div>
      </div>
    </div>
  );
}
