interface CaseStudyCardProps {
  cardNumber: number;
  thumbnail: string;
}

export default function CaseStudiesCard({
  cardNumber,
  thumbnail,
}: CaseStudyCardProps) {
  return (
    <div className="w-full rounded-2xl">
      <div className="h-[445px] rounded-t-xl overflow-hidden">
        <img src={thumbnail} className="w-full h-full object-cover" />
      </div>

      <div
        className="p-6 pr-4 bg-white flex justify-between gap-[90px] rounded-b-xl"
        style={{
          boxShadow:
            "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        }}
      >
        <h2 className="text-[50px] leading-[60px] text-[#D0D3D9] font-rocReg">
          {cardNumber <= 9 ? `0${cardNumber}` : `${cardNumber}`}
        </h2>
        <div className="flex flex-col gap-3.5 items-center">
          <h3 className="text-[20px] leading-8 tracking-[-0.6px] text-[#2B2F38] font-rocMid">
            A SaaS platform for seamless coding for programmers
          </h3>
          <div className="w-full flex !justify-between gap-2">
            <button
              className="w-full flex justify-center items-center gap-2.5 text-[#383E49] text-lg font-rocMid py-2 px-4 rounded-lg"
              style={{
                background:
                  "linear-gradient(180deg, rgba(240, 241, 243, 0.30) 0%, rgba(240, 241, 243, 0.00) 100%), #FFF",
                boxShadow: "0px 0px 7px 2px #F0F1F3 inset",
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M2.01677 11.4069C1.90328 11.2272 1.84654 11.1373 1.81477 10.9988C1.79091 10.8947 1.79091 10.7305 1.81477 10.6264C1.84654 10.4878 1.90328 10.398 2.01677 10.2183C2.95461 8.73328 5.74617 4.97925 10.0003 4.97925C14.2545 4.97925 17.0461 8.73328 17.9839 10.2183C18.0974 10.398 18.1541 10.4878 18.1859 10.6264C18.2098 10.7305 18.2098 10.8947 18.1859 10.9988C18.1541 11.1373 18.0974 11.2272 17.9839 11.4069C17.0461 12.8919 14.2545 16.6459 10.0003 16.6459C5.74617 16.6459 2.95461 12.8919 2.01677 11.4069Z"
                    stroke="#5D6679"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0003 13.3126C11.381 13.3126 12.5003 12.1933 12.5003 10.8126C12.5003 9.43187 11.381 8.31258 10.0003 8.31258C8.61962 8.31258 7.50034 9.43187 7.50034 10.8126C7.50034 12.1933 8.61962 13.3126 10.0003 13.3126Z"
                    stroke="#5D6679"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>View case study</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
