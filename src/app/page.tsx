import Image from "next/image";
import LifeCounter from "@/components/life-counter";

export default function Home() {
  return (
    <div className="grid grid-cols-3 top-10">
      <LifeCounter className="w-full h-full"/>
      <LifeCounter className=""/>
      <LifeCounter />
      <LifeCounter />
      <LifeCounter />
      <LifeCounter />
    </div>
  );
}
