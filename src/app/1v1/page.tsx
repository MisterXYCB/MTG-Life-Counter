import Image from "next/image";
import LifeCounter from "@/components/life-counter";
import LeftRotatedLifeCounter from "@/components/left-rotated-life-counter";
import RightRotatedLifeCounter from "@/components/right-rotated-life-counter";

export default function oneVSone() {
  return (
    <div className="absolute grid grid-cols-2 w-full h-full gap-0 ">
      <LeftRotatedLifeCounter className="absolute top-0 origin-top-left" />
      <RightRotatedLifeCounter className="absolute top-0 origin-top-left" />
    </div>
  );
}
