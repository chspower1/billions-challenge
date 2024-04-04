import React from "react";

interface PersonCardProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default function PersonCard({}: PersonCardProps) {
  return <div>PersonCard</div>;
}
