function RandomJokes() {
  return (
    <div className=" w-screen h-screen bg-no-repeat bg-cover bg-[url('src/assets/bg2.svg')] flex justify-center items-center">
      <div className="w-[524px] h-[273px] bg-black rounded-xl flex flex-col p-4 text-white">
        <div className="w-[100%] h-[15%] flex gap-4 justify-start items-center">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7L1 7M1 7L7 13M1 7L7 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold">Post</span>
        </div>
        <div className="h-[60%] flex flex-col gap-2">
          <div className="flex gap-3">
            <div>
              <img src="src/assets/elon.png" className="size-[45px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold">Elon Musk</span>
              <span className="text-slate-400">@elonmusk</span>
            </div>
            <div>
              <img src="src/assets/bluetick.svg" alt="hh" />
            </div>
          </div>
          <div>
            Even some of the best AI software engineers in the world don’t
            realize how advanced Tesla AI has become
          </div>
          <div>11:18 PM · Jul 30, 2024 · 20.5M Views</div>
        </div>
        <hr />
        <div className="h-[10%]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <hr />
        <div className="h-[15%] flex justify-center items-end text-sm text-slate-500">© chai aur code</div>
      </div>
    </div>
  );
}

export default RandomJokes;
