import { ToolButton } from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pen,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] left-2 -translate-y-[50%] flex flex-col gap-y-4">
      <div className=" bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">

        {/* Select Toolbar */}
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => {}}
          isActive={false}
        />

        {/* Text Toolbar */}
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() => {}}
          isActive={false}
        />

        {/* Sticky Note Toolbar  */}
        <ToolButton
          label="Sticky Note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />

        {/* Rectangle Toolbar */}
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />

        {/* Ellipse toolbar */}
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
        />

        {/* Pen Toolbar */}
        <ToolButton
          label="Pen"
          icon={Pen}
          onClick={() => {}}
          isActive={false}
        />
      </div>

      <div className=" bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={() => {}}
          isDisabled={true}
        />

        {/* Redo Toolbar */}
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={() => {}}
          isDisabled={true}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] left-2 -translate-y-[50%] flex shadow-md rounded-md flex-col gap-y-4 bg-white h-[360px] w-[52px]" />
  );
};
