import axios from "axios";
import { useEffect, useState } from "react";

function RandomJokes() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
      .then((res) => {
        if (res.status !== 200) return;
        setdata(res.data.data.content);
      });
  }, []);
  return (
    <div className=" w-screen h-screen bg-no-repeat bg-cover bg-[url('src/assets/bg2.svg')] flex justify-center items-center">
      <div className="w-[650px] h-[400px] bg-black rounded-xl flex flex-col p-4 text-white">
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
        <div className="h-[60%] flex flex-col gap-2 justify-between py-2">
          <div className="flex justify-between pr-3">
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
            <svg
              width="11"
              height="3"
              viewBox="0 0 11 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.75 1.5C2.75 0.671566 2.1344 0 1.375 0C0.615609 0 0 0.671566 0 1.5C0 2.32843 0.615609 3 1.375 3C2.1344 3 2.75 2.32843 2.75 1.5ZM6.875 1.5C6.875 0.671566 6.2594 0 5.5 0C4.7406 0 4.125 0.671566 4.125 1.5C4.125 2.32843 4.7406 3 5.5 3C6.2594 3 6.875 2.32843 6.875 1.5ZM11 1.5C11 0.671566 10.3844 0 9.625 0C8.8656 0 8.25 0.671566 8.25 1.5C8.25 2.32843 8.8656 3 9.625 3C10.3844 3 11 2.32843 11 1.5Z"
                fill="#A0A0A0"
              />
            </svg>
          </div>
          <div>{data}</div>
          <div>11:18 PM · Jul 30, 2024 · 20.5M Views</div>
        </div>
        <hr />
        <div className="h-[10%] flex justify-between items-center text-center p-4">
          <div className="flex gap-2">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.09653C0 1.83319 1.79873 0 4.01753 0H6.20873C8.46216 0 10.2885 1.86392 10.2885 4.16309C10.2885 5.67881 9.48198 7.07163 8.18262 7.80388L4.14049 10.0877V8.19817H4.10687C1.85344 8.24938 0 6.40082 0 4.09653ZM4.01753 1.02413C2.3528 1.02413 1.00376 2.40159 1.00376 4.09653C1.00376 5.82219 2.39396 7.20988 4.08428 7.17404L4.26044 7.16892H5.14425V8.34667L7.6973 6.90777C8.67647 6.35473 9.28474 5.305 9.28474 4.16309C9.28474 2.42719 7.90759 1.02413 6.20873 1.02413H4.01753Z"
                fill="#71767B"
              />
            </svg>
            <span className="text-[8px] text-gray-400">4.9K</span>
          </div>
          <div className="flex gap-2">
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.93171 0L4.99998 2.10842L4.36344 2.85197L3.39837 1.86906V6.17249C3.39837 6.7327 3.81651 7.19105 4.33171 7.19105H6.89838V8.20961H4.33171C3.30084 8.20961 2.46504 7.298 2.46504 6.17249V1.86906L1.49997 2.85197L0.863434 2.10842L2.93171 0ZM8.53172 1.07968H5.96505V0.0611137H8.53172C9.56259 0.0611137 10.3984 0.972727 10.3984 2.09824V6.40166L11.3635 5.41875L12 6.1623L9.93172 8.27073L7.86345 6.1623L8.49999 5.41875L9.46505 6.40166V2.09824C9.46505 1.53803 9.04692 1.07968 8.53172 1.07968Z"
                fill="#71767B"
              />
            </svg>
            <span className="text-[8px] text-gray-400">5.3K</span>
          </div>
          <div className="flex gap-2">
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.81811 1.15068C8.08494 1.11613 7.21076 1.44437 6.48419 2.39453L6.0012 3.02222L5.51762 2.39453C4.79044 1.44437 3.91566 1.11613 3.18249 1.15068C2.43671 1.19099 1.77313 1.59985 1.43654 2.25057C1.10535 2.89553 1.05675 3.85146 1.72393 5.02621C2.36831 6.16065 3.67807 7.48512 6.0012 8.83263C8.32313 7.48512 9.63229 6.16065 10.2767 5.02621C10.9432 3.85146 10.8946 2.89553 10.5629 2.25057C10.2263 1.59985 9.56329 1.19099 8.81811 1.15068ZM11.3302 5.57903C10.5197 7.00716 8.92971 8.52743 6.30299 9.99587L6.0012 10.1686L5.69881 9.99587C3.07149 8.52743 1.48154 7.00716 0.669765 5.57903C-0.14621 4.13938 -0.176209 2.78036 0.361374 1.73805C0.893558 0.707267 1.94953 0.0623056 3.12189 0.00471975C4.11246 -0.0471075 5.14263 0.327201 6.0006 1.1622C6.85797 0.327201 7.88814 -0.0471075 8.87811 0.00471975C10.0505 0.0623056 11.1064 0.707267 11.6386 1.73805C12.1762 2.78036 12.1462 4.13938 11.3302 5.57903Z"
                fill="#71767B"
              />
            </svg>
            <span className="text-[8px] text-gray-400">59K</span>
          </div>
          <div className="flex gap-2">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.14032 1.33006C0.14032 0.595869 0.661894 0 1.30559 0H6.43277C7.07647 0 7.59804 0.595869 7.59804 1.33006V11.1406L3.86918 8.10275L0.14032 11.1406V1.33006ZM1.30559 1.06405C1.17694 1.06405 1.07253 1.1811 1.07253 1.33006V9.07636L3.86918 6.79397L6.66583 9.07636V1.33006C6.66583 1.1811 6.56142 1.06405 6.43277 1.06405H1.30559Z"
                fill="#71767B"
              />
            </svg>
            <span className="text-[8px] text-gray-400">1.1K</span>
          </div>
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.58829 0L7.49421 2.78653L6.77538 3.48072L5.0981 1.86746V6.55568H4.07848V1.86746L2.39611 3.48072L1.67727 2.78653L4.58829 0ZM9.17658 6.06681L9.16638 7.78273C9.16638 8.45736 8.5954 9 7.89186 9H1.27453C0.565889 9 0 8.45247 0 7.77784V6.06681H1.01962V7.77784C1.01962 7.91472 1.13178 8.02227 1.27453 8.02227H7.89186C8.03461 8.02227 8.14676 7.91472 8.14676 7.77784L8.15696 6.06681H9.17658Z"
              fill="#71767B"
            />
          </svg>
        </div>
        <hr />
        <div className="h-[15%] flex justify-center items-end text-sm text-slate-500">
          © chai aur code
        </div>
      </div>
    </div>
  );
}

export default RandomJokes;
