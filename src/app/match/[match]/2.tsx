import Image from "next/image";
import LifeCounter from "@/components/life-counter";

export default function Two() {
  return (
    <div className="grid grid-cols-1">
      <LifeCounter />
      <LifeCounter />
    </div>
  );
}
