import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CatsListing() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.freeapi.app/api/v1/public/cats?page=1&limit=4")
      .then((res) => {
        if (res.status !== 200) return;
        setdata(res.data.data);
      });
  }, []);
  return (
    <div className="bg-[#a1a1a1] w-screen h-screen bg-[url('src/assets/bg3.png')]
    flex justify-center items-center bg-no-repeat bg-cover px-8">
      <div className="flex gap-8 overflow-x-scroll scrollbar-hide">
        {data && data.data.map((e,i) =>(
        <div key={i} className="w-[375px] h-[643px] rounded-[18px] bg-white flex-shrink-0 relative">
          <div className={`h-[40%] rounded-t-[18px]`}>
            <img src={e.image} className="h-full w-full rounded-t-[18px]" />
          </div>
          <div className="h-[50%] rounded-b-[18px] p-4 ">
            <div className="h-[15%]">
              <h2 className="text-2xl font-bold">{e.name}</h2>
            </div>
            <div className="h-[50%]">
              <p className="text-[14px] tracking-tight">{e.description}</p>
            </div>
            <div className="h-[10%] flex gap-5 my-2">
              <span className="font-bold">Origin</span><span>{e.origin}</span>
            </div>
            <div>
              <div className="font-bold my-1">Temperament</div>
              <div className="my-2">
                <span className="bg-zinc-400 mr-4 rounded-lg p-1 text-sm">Independent</span>
                <span className="bg-zinc-400 mr-4 rounded-lg p-1 text-sm">Highly Intelligent</span>
                <span className="bg-zinc-400 mr-4 rounded-lg p-1 text-sm">Clever</span>
              </div>
              <div className="my-2">
                <span className="font-bold mr-4">Life Span</span><span>{e.life_span} years</span>
              </div>
            </div>
            <Link to={e.wikipedia_url}  target="_blank" className="text-blue-700">
            Learn More
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default CatsListing;
