import PersonCard from "@/components/person-card";
import { API_URL } from "@/constant/api.constant";
import Image from "next/image";
import Link from "next/link";
export interface People {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}
const getAllPeople = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export default async function Home({}) {
  const people: People[] = await getAllPeople();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <h1 className="text-2xl my-14">Billons in the world</h1>
      <div className="flex flex-wrap justify-center items-center">
        {people.map((person) => {
          return <PersonCard key={person.id} person={person} />;
        })}
      </div>
    </main>
  );
}
