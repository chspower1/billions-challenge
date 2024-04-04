import { API_URL } from "@/constant/api.constant";
import Image from "next/image";
interface People {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {people.map((person) => (
        <div key={person.id} className="flex flex-col items-center">
          <Image src={person.squareImage} alt={person.name} width={200} height={200} />
          <h1 className="text-2xl font-bold">{person.name}</h1>
          <p className="text-lg font-bold">{person.netWorth}</p>
          <ul>
            {person.industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
