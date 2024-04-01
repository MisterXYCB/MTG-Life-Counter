import Image from "next/image";
import LifeCounter from "@/components/life-counter";

export default function oneVSone() {
  return (
    <div className="grid grid-cols-2">
      <LifeCounter className="h-[50vw] w-[100vh] left-0 rotate-90" />
      <LifeCounter className="h-[50vw] w-[100vh] -rotate-90" />
    </div>
  );
}
