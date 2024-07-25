import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import ItmeComponent from "../components/ItmeComponent";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

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
  ]);
  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (over && active.id != over.id) {
      setItmes((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const handleDotClick = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };
  const hendleMoveToTop = (index)=> {
    const copy = [...items];
    for (let i = index ; i > 0 ; i--){
      const temp = copy[i];
      copy[i] = copy[i-1]
      copy[i-1] = temp;
    }
    setItmes((itmes) => copy)
  }
  const hendleMoveToDown = (index)=> {
    const copy = [...items];
    for (let i = 0 ; i < copy.length-1 ; i++){
      const temp = copy[i];
      copy[i] = copy[i+1]
      copy[i+1] = temp;
    }
    setItmes((itmes) => copy)
  }
  const hendleDelete = (index)=> {
    setItmes((items) => items.filter((e,i) => i !== index))
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
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <div className="flex flex-col gap-2 w-full ml-28 ">
            <SortableContext items={items}>
              {items.map((item, index) => (
                  <ItmeComponent index={index} item={item} key={item.id}>
                    <div>
                      <img
                        src={`./src/assets/dot.svg`}
                        className="size-10 cursor-pointer"
                        onClick={() => handleDotClick(item.id)}
                      />
                      {dropdownVisible === item.id && (
                        <div className="absolute  ml-12 mt-2 w-52 bg-white border rounded-lg shadow-lg">
                          <ul>
                            <li
                              className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2"
                              onClick={() => hendleMoveToTop(index)}
                            >
                              <img className="size-5" src="./src/assets/up.svg" />
                              <span>Move To Top</span>
                            </li>
                            <li onClick={() => hendleMoveToDown(index)} className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2">
                              <img
                                className="size-5"
                                src="./src/assets/down.svg"
                              />
                              <span >
                                Move To Bottom
                              </span>
                            </li>
                            <li onClick={() => hendleDelete(index)} className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2">
                              <img
                                className="size-5"
                                src="./src/assets/delete.svg"
                              />
                              <span

                                className="text-red-600"
                              >
                                Delete
                              </span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </ItmeComponent>
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default CourseList;
