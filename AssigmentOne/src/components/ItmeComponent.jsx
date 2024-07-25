import { useSortable } from '@dnd-kit/sortable';
import { useState } from 'react'
import {CSS} from '@dnd-kit/utilities';

function ItmeComponent({item,index,...props}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id: item.id});
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return(
    <div
      className={
        `bg-white  w-[1000px] h-[93px] flex items-center justify-between border-2 drop-shadow-lg rounded-lg`
      }
      key={item.id}
      ref={setNodeRef}
      style={style}
    >
      <div className=" ml-4 flex gap-4 w-[75%] items-center">
        <img
          src={`${isDragging ? "./src/assets/onDrag.svg" : "./src/assets/drag.svg"}`}
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
      <div className=" ml-4 flex justify-between w-[25%] relative">
        <p className="text-lg">{item.price}</p>
        <span className="bg-[#c4dab7] text-sm p-2 rounded w-[95px] h-[35px] text-center justify-center">
          {item.tag}
        </span>
      </div>
      {props.children}
    </div>
  )
}

export default ItmeComponent