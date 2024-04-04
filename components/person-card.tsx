import { People } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PersonCard({
  person: { id, industries, name, netWorth, squareImage },
}: {
  person: People;
}) {
  return (
    <div key={id} className="flex flex-col items-center w-64 mb-6">
      <Link href={`/person/${id}`}>
        <div className="w-[200px] h-[200px]">
          {squareImage.includes("specials-images.forbesimg.com") ? (
            <Image src={squareImage} alt={name} width={200} height={200} className="rounded-xl" />
          ) : (
            <div className="w-full h-full bg-gray-500 rounded-xl" />
          )}
        </div>
      </Link>

      <h1 className="text-xl font-bold text-center">{name}</h1>
      <p className="text-lg font-bold">{Math.floor(netWorth / 1000)} billions</p>
      <ul>
        {industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
    </div>
  );
}
