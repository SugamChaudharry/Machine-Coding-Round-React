import { useCallback, useEffect, useMemo, useState } from "react";
import { BatchData } from "../data/batch";

function useDebounce(input,time){
  const [returnInput,setReturnInput] = useState(input)
  useEffect(()=>{
    const ref = setTimeout(()=>{
      setReturnInput(input)
    },time)
    return ()=>{
      clearTimeout(ref)
    }
  },[input,time])
  return  returnInput
}
function Batches() {
  const [data, setData] = useState(BatchData);
  const [pageNo, setPageNo] = useState(1);
  const [searchParam, setSearchParam] = useState("");
  const deBouncevalue = useDebounce(searchParam,500)

  const itemsPerPage = 3;

  const handleSetSearchParam = useCallback((value) => {
    setPageNo(1)
    setSearchParam(value)
  },[])

  const filteredData = useMemo(()=>{
    return data.filter((d) => {
      if (deBouncevalue.length === 0) {
        return true;
      } else {
        const title = d.title;
        return title.toLowerCase().includes(deBouncevalue.toLowerCase());
      }
    })
  },[data,deBouncevalue])

  const totalPages = useMemo(()=>{
    return Math.ceil(filteredData.length / itemsPerPage)
  },[filteredData])

  const handlePageNo = useCallback((value) => {
  if (value > 0 && value <= totalPages) {
    setPageNo(value);
  }
}, [totalPages]);

  const hendleSumbit = (e) => {
    e.preventDefault();
    setPageNo(1);
  };

  return (
    <div className="w-screen h-screen bg-[#e2bbe9] flex items-center flex-col justify-around font-mono">
      <h1 className="text-[80px] font-bold leading-[96.82px] text-[#4f6f52] drop-shadow-lg">
        Chai aur code
      </h1>
      <div className=" bg-white rounded-lg w-[1223px] h-[785px] flex items-center flex-col  gap-10">
        <div className="w-full flex  flex-col  gap-3 ml-28 mt-20">
          <h2 className="text-black text-4xl font-bold">Batches</h2>
          <p className="text-gray-500 text-xl ">
            Create learner’s batch and share information at the same time.
          </p>
        </div>
        <form className="w-full ml-28 flex text-center gap-4" action="" onSubmit={(e) => hendleSumbit(e)}>
          <input
            type="text"
            placeholder="Search by Title"
            className="w-[340px] h-[43px] flex p-4 border-2 border-black"
            onChange={(e) => handleSetSearchParam(e.target.value)}
            value={searchParam}
            aria-keyshortcuts="alt+k"
          />
          <button className="w-[116px] h-[43px] rounded-md bg-[#6c6baf] text-white">
            Search
          </button>
        </form>
        <table className="w-[1126px] border-2 border-slate-700">
          <thead className="w-full h-[68px] bg-[#f2f2f2] ">
            <tr>
              <th className="px-4 border-2 border-slate-700">Title</th>
              <th className="px-4 border-2 border-slate-700">Start Date</th>
              <th className="px-4 border-2 border-slate-700">End Date</th>
              <th className="px-4 border-2 border-slate-700">Price</th>
              <th className="px-4 border-2 border-slate-700">
                Validity/Expiry
              </th>
              <th className="px-4 border-2 border-slate-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .slice((pageNo - 1) * itemsPerPage, pageNo * itemsPerPage)
              .map((value, index) => (
                <tr key={index}>
                  <td className="flex items-center gap-10 px-4 py-4 mb-4  border-slate-700">
                    <img
                      src={`${value.imageUrl}id/${value.id + 10}/106/60`}
                      alt={`img${index + 1}`}
                      className="rounded-lg"
                    />
                    <p className="">{value.title}</p>
                  </td>
                  <td className="px-4 border-x-2 border-slate-700">
                    {value.startDate}
                  </td>
                  <td className="px-4 border-x-2 border-slate-700">
                    {value.endDate}
                  </td>
                  <td className="text-nowrap p-4 border-x-2 border-slate-700 ">
                    {value.price}
                  </td>
                  <td className="px-4 border-x-2 border-slate-700">
                    {value.validityExpiry}
                  </td>
                  <td className="px-4 border-x-2 border-slate-700">
                    {value.status}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="w-full flex items-center justify-end mr-28 gap-4 ">
          <p>Row per page </p>
          <div className="flex  w-[73px] h-[43px] border-2">
            <select
              onChange={(e) => handlePageNo(Number(e.target.value))}
              className="w-full bg-white outline-none flex text-center justify-center"
            >
              {[...Array(totalPages).keys()].map((_, index) => (
                <option
                  selected={pageNo === index + 1}
                  className="p-2"
                  key={index}
                  id={index}
                >
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-[90px]">
            <img src="./src/assets/left.svg" alt="" className=" w-[35px]" onClick={() => handlePageNo(pageNo - 1)} />
            <img src="./src/assets/right.svg" alt="" className=" w-[35px]" onClick={() => handlePageNo(pageNo + 1)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Batches;
