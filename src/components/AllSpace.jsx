import icon from "../assets/car pack.png";
import mic from "../assets/mic.png";

function AllSpace() {
  return (
    <div className="relative p-10 h-screen">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-center bg-cover blur-[2px] z-0"
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <div
        className="flex relative z-1 text-white justify-between items-center w-full h-full p-[70px]
    rounded-[20px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${icon})` }}
      >
        <div className="flex rounded-[20px] w-full overflow-hidden border-[3px] border-[#ffffff1a] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <div className="rounded-[15px] backdrop-blur-[20px] bg-[#ffffff1a] p-[40px] w-[50%] h-[100%]  flex flex-col">
            <h1 className="text-[42px] font-bold text-white mb-5 tracking-wide">
              All Space Solution
            </h1>
            <p className="text-[14.5px] leading-[1.6] mb-[30px]">
              Seamlessly book office spaces and reserve car park <br />
              spots across NNPC locations—efficient, transparent, <br />
              and built for your convenience.
            </p>

            <a href="no-underline">
              <div className="flex items-center justify-center gap-[10px]  bg-white rounded-[8px] cursor-pointer px-[16px] py-[12px] ">
                <img src={mic} className="w-5 h5" />
                <button className="border-none bg-white text-[16px] text-black font-semibold cursor-pointer">
                  Sign in with Microsoft
                </button>
              </div>
            </a>
          </div>
          <div className="w-[50%]"></div>
        </div>
      </div>
    </div>
  );
}

export default AllSpace;
