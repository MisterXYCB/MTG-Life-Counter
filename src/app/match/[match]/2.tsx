import Image from "next/image";
import LifeCounter from "@/components/life-counter";

export default function Two() {
  return (
    <div className="grid grid-cols-1">
      <LifeCounter className="left-0 rotate-90 w-[100vh] h-[50vw] scale-150"/>
      <LifeCounter className="left-0 rotate-90 w-[100vh] h-[50vw]"/>
    </div>
  );
}
