import { NavLink } from "react-router-dom";
import manjurulIslam from "../../public/titleImage.png";

export default function Banner() {
  return (
    <div className="bg-[url('../../public/Header.png')] bg-cover bg-center pt-[128px] rounded-xl">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-rocReg text-white bg-[#173E34] rounded-full py-4 px-6 text-xl">
          Hey, Dream Chaser! 🚀
        </h1>
        <div className="flex flex-col items-center">
          <div className="text-[54px] leading-[72px] text-center font-rocReg text-white mb-2.5 tracking-[-2.7px]">
            I’m{" "}
            <img src={manjurulIslam} alt="Manjurul islam" className="inline" />{" "}
            <strong className="font-rocBold text-[#B9F49B]">
              Manjurul Islam
            </strong>{" "}
            <br /> A curious, logical & perfectionist <br />{" "}
            <strong className="font-rocBold text-[#B9F49B]">
              Product Designer
            </strong>{" "}
            From Bangladesh.
          </div>
          <span className="text-[#FFFFFFB2] text-center text-[21px] font-rocReg">
            I design scalable digital products for efficient business growth.
          </span>
        </div>
        <div className="flex justify-center gap-4 pb-[115px]">
          <button className="bg-[#F7F6EF] text-lg text-[#00432B] rounded-lg outline-none font-rocMid py-3 px-4 tracking-[-0.72px] leading-7 flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M18 8.6862H3M13.8333 2.01953V5.35286M7.16667 2.01953V5.35286M9.25 12.0195L10.5 11.1862V15.3529M9.45833 15.3529H11.5417M7 18.6862H14C15.4001 18.6862 16.1002 18.6862 16.635 18.4137C17.1054 18.174 17.4878 17.7916 17.7275 17.3212C18 16.7864 18 16.0863 18 14.6862V7.6862C18 6.28607 18 5.586 17.7275 5.05122C17.4878 4.58082 17.1054 4.19837 16.635 3.95868C16.1002 3.6862 15.4001 3.6862 14 3.6862H7C5.59987 3.6862 4.8998 3.6862 4.36502 3.95868C3.89462 4.19837 3.51217 4.58082 3.27248 5.05122C3 5.586 3 6.28607 3 7.6862V14.6862C3 16.0863 3 16.7864 3.27248 17.3212C3.51217 17.7916 3.89462 18.174 4.36502 18.4137C4.8998 18.6862 5.59987 18.6862 7 18.6862Z"
                  stroke="#00432B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Book a call</span>
          </button>
          <button className="bg-[#EDFDDE1A] text-lg text-[#B9F49B] border border-[#B9F49B] rounded-lg outline-none font-rocMid py-3 px-4 tracking-[-0.72px] leading-7 flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M10.9167 2.01953H13.1667C14.5668 2.01953 15.2669 2.01953 15.8016 2.29201C16.272 2.5317 16.6545 2.91415 16.8942 3.38456C17.1667 3.91933 17.1667 4.6194 17.1667 6.01953V14.6862C17.1667 16.0863 17.1667 16.7864 16.8942 17.3212C16.6545 17.7916 16.272 18.174 15.8016 18.4137C15.2669 18.6862 14.5668 18.6862 13.1667 18.6862H7.83333C6.4332 18.6862 5.73314 18.6862 5.19836 18.4137C4.72795 18.174 4.3455 17.7916 4.10582 17.3212C3.83333 16.7864 3.83333 16.0863 3.83333 14.6862V14.1029M13.8333 11.1862H10.0833M13.8333 7.85286H10.9167M13.8333 14.5195H7.16667M5.5 8.6862V4.10286C5.5 3.41251 6.05964 2.85286 6.75 2.85286C7.44036 2.85286 8 3.41251 8 4.10286V8.6862C8 10.0669 6.88071 11.1862 5.5 11.1862C4.11929 11.1862 3 10.0669 3 8.6862V5.35286"
                  stroke="#B9F49B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>My Resume</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-3 pb-7">
        <NavLink to={"/"} className="bg-[#FBFCFC] p-4 rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.4998 5.6H12.2499V4H17.4998V5.6ZM18.7943 13.6C18.4628 14.6376 17.2726 16 14.9686 16C12.6631 16 10.7956 14.6168 10.7956 11.46C10.7956 8.332 12.5394 6.724 14.8951 6.724C17.2066 6.724 18.6181 8.1496 18.9263 10.2648C18.9848 10.6696 19.0081 11.2152 18.9976 11.9768H12.9774C13.0749 14.5456 15.5896 14.6264 16.4183 13.6H18.7943ZM13.0299 10.4H16.7536C16.6748 9.1624 15.9016 8.6248 14.8959 8.6248C13.7964 8.6248 13.1881 9.2392 13.0299 10.4ZM5.84945 15.9904H1V4.0168H6.21469C10.3216 4.0816 10.3996 8.372 8.25467 9.5416C10.8504 10.5496 10.9374 15.9904 5.84945 15.9904ZM3.24998 8.8H5.93795C7.81893 8.8 8.11742 6.4 5.70395 6.4H3.24998V8.8ZM5.7932 11.2H3.24998V13.6128H5.7557C8.04692 13.6128 7.90668 11.2 5.7932 11.2Z"
                fill="#2B2F38"
              />
            </svg>
          </span>
        </NavLink>

        <NavLink to={"/"} className="bg-[#FBFCFC] p-4 rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.9432 7.5752H10.9144V9.0552C11.3424 8.204 12.44 7.4392 14.0888 7.4392C17.2496 7.4392 18 9.1336 18 12.2424V18H14.8V12.9504C14.8 11.18 14.372 10.1816 13.2824 10.1816C11.7712 10.1816 11.1432 11.2576 11.1432 12.9496V18H7.9432V7.5752ZM2.456 17.864H5.656V7.4392H2.456V17.864ZM6.1144 4.04C6.11452 4.30822 6.06132 4.57379 5.95791 4.82127C5.85449 5.06875 5.70292 5.29321 5.512 5.4816C5.12512 5.8661 4.60145 6.08132 4.056 6.08C3.51151 6.07963 2.98905 5.86496 2.6016 5.4824C2.41137 5.29337 2.26031 5.06866 2.15707 4.82115C2.05384 4.57363 2.00046 4.30818 2 4.04C2 3.4984 2.216 2.98 2.6024 2.5976C2.98951 2.21453 3.51219 1.99976 4.0568 2C4.6024 2 5.1256 2.2152 5.512 2.5976C5.8976 2.98 6.1144 3.4984 6.1144 4.04Z"
                fill="#2B2F38"
              />
            </svg>
          </span>
        </NavLink>

        <NavLink to={"/"} className="bg-[#FBFCFC] p-4 rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1C5.03125 1 1 5.03125 1 10C1 14.9688 5.03125 19 10 19C14.959 19 19 14.9688 19 10C19 5.03125 14.959 1 10 1ZM15.9445 5.14825C17.0526 6.49775 17.6658 8.18567 17.6823 9.93175C17.4287 9.883 14.8907 9.3655 12.3333 9.688C12.274 9.5605 12.2253 9.424 12.1667 9.2875C12.0077 8.91205 11.8386 8.54092 11.6597 8.1745C14.4903 7.0225 15.7788 5.3635 15.9445 5.14825ZM10 2.32825C11.9522 2.32825 13.7388 3.0595 15.0955 4.26025C14.959 4.45525 13.7972 6.00775 11.0642 7.03225C9.80425 4.71925 8.40925 2.82475 8.194 2.53225C8.78599 2.39402 9.39209 2.3253 10 2.3275V2.32825ZM6.73 3.04975C6.93475 3.3235 8.30125 5.227 9.58 7.49125C5.9875 8.44825 2.815 8.42875 2.47375 8.42875C2.97175 6.04675 4.58275 4.06525 6.73 3.04975ZM2.308 10.0097V9.77575C2.64025 9.7855 6.3685 9.83425 10.2055 8.68225C10.4298 9.112 10.6345 9.55075 10.8295 9.99025C10.732 10.0195 10.6248 10.0487 10.5273 10.078C6.56425 11.3568 4.45525 14.851 4.27975 15.1442C3.01031 13.7354 2.30785 11.9062 2.308 10.0097ZM10 17.692C8.29151 17.6947 6.63148 17.1243 5.2855 16.072C5.422 15.7885 6.9835 12.7818 11.3177 11.269C11.3372 11.2593 11.3477 11.2593 11.3665 11.2495C12.4502 14.0507 12.889 16.4035 13.0068 17.077C12.079 17.4775 11.0642 17.692 10 17.692ZM14.2855 16.3743C14.2075 15.9055 13.7972 13.6607 12.7915 10.8977C15.2028 10.5175 17.311 11.1423 17.575 11.23C17.2428 13.3675 16.0128 15.2125 14.2855 16.3743Z"
                fill="#2B2F38"
              />
            </svg>
          </span>
        </NavLink>
      </div>
    </div>
  );
}
