import { useSortable } from '@dnd-kit/sortable';
import { useState } from 'react'
import {CSS} from '@dnd-kit/utilities';

function ItmeComponent({item}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: item.id});
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const handleDotClick = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };
  return(
    <div
      className={
        `bg-white w-[1025px] h-[93px] flex items-center justify-between border-2 drop-shadow-lg rounded-lg
        `
      }
      key={item.id}
      ref={setNodeRef}

      style={style}
    >
      <div className=" ml-4 flex gap-4 w-[80%] items-center">
        <img
          src={`./src/assets/drag.svg`}
          {...attributes}
          {...listeners}
          className="size-10 cursor-move"
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
              >
                <img className="size-5" src="./src/assets/up.svg" />
                <span>Move To Top</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2" >
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
  )
}

export default ItmeComponent