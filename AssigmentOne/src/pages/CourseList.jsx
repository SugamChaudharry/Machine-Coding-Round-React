import { useRef, useState } from "react";

const CourseList = () => {
  const [items, setItmes] = useState([
    {
      id: 1,
      imageUrl: "./src/assets/images/5.png",
      title: "Interview preparation with JavaScript 2.0",
      price: "Rs. 9000/-",
      tag: "Course",
    },
    {
      id: 2,
      imageUrl: "./src/assets/images/4.png",
      title: "Aptitude - Averages, Mixtures & Allegation",
      price: "Free",
      tag: "Mock Test",
    },
    {
      id: 3,
      imageUrl: "./src/assets/images/6.png",
      title: "Aptitude - Simple & Compound Interest",
      price: "Free",
      tag: "Mock Test",
    },
    {
      id: 4,
      imageUrl: "./src/assets/images/2.png",
      title: "Aptitude - Partnership",
      price: "Free",
      tag: "Mock Test",
    },
    {
      id: 5,
      imageUrl: "./src/assets/images/1.png",
      title: "Aptitude - Time & Work",
      price: "Free",
      tag: "Mock Test",
    },
  ])

  const [dropdownVisible, setDropdownVisible] = useState(null);
  const hendleOnUpStart = (index) => {
    dragItem.current = index
  }
  const hendleOnDownEnter = (index) => {
    dragdedOverItem.current = index
  }
  const handleDotClick = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  const dragItem = useRef(0)
  const dragdedOverItem = useRef(0)
  const hendleSort = () => {
    let itemsClone = [...items];
    const draggedItemContent = itemsClone.splice(dragItem.current,1)[0]
    itemsClone.splice(dragdedOverItem.current,0,draggedItemContent)
    dragItem.current = null
    dragdedOverItem.current = null
    setItmes(itemsClone)
  }
  const hendleOnDragStart = (e,index) => {
    dragItem.current = index
  }
  const hendleOnDragEnter = (e,index) => {
    dragdedOverItem.current = index
  }

  return (
    <div className="w-screen h-screen bg-[#c4dab7] flex items-center flex-col justify-around font-mono">
      <h1 className="text-[80px] font-bold leading-[96.82px] text-[#4f6f52] drop-shadow-lg">
        Chai aur code
      </h1>
      <div className=" bg-white rounded-lg w-[1223px] h-[785px] flex items-center flex-col  gap-10">
        <div className="w-full flex  flex-col  gap-3 ml-28 mt-20">
          <h2 className="text-black text-4xl font-bold">Manage Bundle</h2>
          <p className="text-gray-500 text-xl ">
            Change orders of the products based on priority
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full ml-28 ">
          {items.map((item,index) => (
            <div
              className={
                `bg-white w-[1025px] h-[93px] flex items-center justify-between border-2 drop-shadow-lg rounded-lg
              ${dragItem.current == index ? "" : ""}
                `
              }
              key={index}
              draggable
              onDragStart={(e) => hendleOnDragStart(e,index)}
              onDragEnter={(e) =>  hendleOnDragEnter(e,index)}
              onDragEnd={hendleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className=" ml-4 flex gap-4 w-[80%] items-center">
                <img
                  src={`./src/assets/onDrag.svg`}

                  className="size-10"
                />
                <img
                  src={item.imageUrl}
                  alt="img"
                  className="w-[133px] h-[75px] rounded-lg"
                />
                <h3 className="text-xl">{item.title}</h3>
              </div>
              <div className=" ml-4 flex justify-between w-[20%] relative">
                <p className="text-lg">{item.price}</p>
                <span className="bg-[#c4dab7] text-sm p-2 rounded w-[95px] h-[35px] text-center justify-center">
                  {item.tag}
                </span>
                <img
                  src={`./src/assets/dot.svg`}
                  className="size-10 cursor-pointer"
                  onClick={() => handleDotClick(item.id)}
                />
                {dropdownVisible === item.id && (
                  <div className="absolute left-48 ml-4 mt-2 w-52 bg-white border rounded-lg shadow-lg">
                    <ul>
                      <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2"
                      onClick={() => {hendleOnUpStart(index)}}
                      >
                        <img className="size-5" src="./src/assets/up.svg" />
                        <span>Move To Top</span>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2"
                      onClick={() => {hendleOnDownEnter(index)}} >
                        <img className="size-5" src="./src/assets/down.svg" />
                        <span>Move To Bottom</span>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2" >
                        <img className="size-5" src="./src/assets/delete.svg" />
                        <span className="text-red-600">Delete</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
