import { API_URL } from "@/constant/api.constant";
import Image from "next/image";
import React from "react";
export interface PersonDetail {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: FinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
  exerciseOptionPrice?: number;
}

export const getPerson = async (id: string) => {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
};

export default async function PersonDetailPage({ params: { id } }: { params: { id: string } }) {
  const person: PersonDetail = await getPerson(id);
  return (
    <div className="bg-gray-700">
      <div className="flex flex-col justify-center items-center gap-y-2 bg-slate-50 mx-10 rounded-lg py-10">
        {person.squareImage.includes("specials-images.forbesimg.com") ? (
          <Image
            src={person.squareImage}
            alt={person.name}
            width={400}
            height={400}
            className="rounded-xl"
          />
        ) : (
          <div className="w-full h-full bg-gray-500 rounded-xl" />
        )}
        <h1 className="text-3xl">{person.name}</h1>
        <div>{person.netWorth}</div>
        <div>{person.country}</div>
        <div>
          {person.industries.map((industry) => (
            <div key={industry}>{industry}</div>
          ))}
        </div>
        <div className="max-w-screen-lg">{person.bio}</div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 bg-slate-50 mx-10 rounded-lg py-10">
        <h1 className="text-3xl mb-7">Finalcial Assets</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {person.financialAssets.map((financialAsset) => (
            <div
              key={financialAsset.exchange}
              className="w-60 h-30 p-4 border-gray-400 border-2 rounded-lg"
            >
              <div>Ticket : {financialAsset.ticker}</div>

              <div>Shares : {financialAsset.numberOfShares}</div>

              {financialAsset.exerciseOptionPrice && (
                <div>Excersie Price : {financialAsset.exerciseOptionPrice}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
