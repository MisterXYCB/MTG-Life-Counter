import Image from "next/image";
import LifeCounter from "@/components/life-counter";

export default function Two() {
  return (
    <div className="grid grid-cols-2">
      <LifeCounter className="left-0 rotate-90 w-[100vh] h-[50vw]" />
      <LifeCounter className="-rotate-90 w-[100vh] h-[50vw]" />
    </div>
  );
}
