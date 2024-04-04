import Image from "next/image";
import React from "react";

interface PersonCardProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default function PersonCard({
  id,
  industries,
  name,
  netWorth,
  squareImage,
}: PersonCardProps) {
  return (
    <div>
      <Image src={squareImage} alt="#" />
    </div>
  );
}
