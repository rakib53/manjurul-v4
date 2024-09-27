interface MarqueeSliderProps {
  width?: number;
  height?: number;
  prefix?: string;
  reverse?: boolean;
  animationDuration?: number;
  contents?: string[]; // Assuming contents are an array of image URLs
  gap?: number;
  className?: string;
}

const MarqueeSlider: React.FC<MarqueeSliderProps> = ({
  width,
  height,
  prefix,
  reverse = false,
  animationDuration,
  contents = [],
  gap = 0,
  className = "",
}) => {
  return (
    <div className={`slider${prefix} ${className}`}>
      <style>
        {`
            .slider${prefix} {
              width: 100%;
              height: ${height ? height + "px" : "auto"};
              overflow: hidden;
              position: relative;
            }

            .slideTrack${prefix} {
                display: flex;
                width: calc(${width}px * ${contents.length * 2});
                animation: scroll${prefix} ${animationDuration}s linear infinite;
                gap: ${gap ? gap + "px" : ""}
            }

            .slide${prefix} {
              width: ${width}px;
              height: ${height ? height + "px" : "auto"};
              line-height: 100px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              box-sizing: border-box;
              flex-shrink: 0;
            }

            @keyframes scroll${prefix} {
              0% {
                transform: ${
                  reverse
                    ? `translateX(calc(-${width}px * ${contents.length}))`
                    : "translateX(0)"
                };
              }
              100% {
                transform: ${
                  reverse
                    ? "translateX(0)"
                    : `translateX(calc(-${width}px * ${contents.length}))`
                };
              }
            }
        `}
      </style>

      <div className={`slideTrack${prefix}`}>
        {contents.map((c, index) => (
          <div className={`slide${prefix}`} key={index}>
            <img src={c} alt="" />
          </div>
        ))}
        {/* Duplicate slides */}
        {contents.map((c, index) => (
          <div className={`slide${prefix}`} key={index}>
            <img src={c} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
