import LeftRotatedLifeCounter from "@/components/left-rotated-life-counter";
import RightRotatedLifeCounter from "@/components/right-rotated-life-counter";

export default function oneVSone() {
  return (
    <div className="absolute grid grid-cols-2 w-full h-full gap-0 overflow-hidden">
      <LeftRotatedLifeCounter className="relative w-full h-full" scale={125} startLife={20} isCommander={false}/>
      <RightRotatedLifeCounter className="relative w-full h-full" scale={125} startLife={20} isCommander={false}/>
    </div>
  );
}
