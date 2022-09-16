import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

export interface Billion {
    id?: string;
    state?: string;
    city?: string;
    name?: string;
    country?: string;
    position?: number;
    industries?: string[];
    financialAssets?: FinancialAsset[];
    thumbnail?: string;
    squareImage?: string;
    bio?: string[];
    about?: string[];
    netWorth?: number;
}

export interface FinancialAsset {
    exchange?: string;
    ticker?: string;
    companyName?: string;
    numberOfShares?: number;
    sharePrice?: number;
    currencyCode?: string;
    exchangeRate?: number;
    interactive?: boolean;
    currentPrice?: number;
    exerciseOptionPrice?: number;
}

export default function Detail({ billion }: { billion: Billion }) {
    return (
        <div className="mx-auto flex h-full w-1/3 flex-col items-center justify-center ">
            <img src={billion.squareImage} alt="#" className="mt-10 rounded-2xl" />
            <h1 className="text-[30px] font-bold">{billion.name}</h1>
            <h2 className="text-[20px] font-bold">재산 : ${billion.netWorth} million</h2>
            <p className="flex flex-col items-center">
                <h3
                    className="
                my-10"
                >
                    {billion.name}의 산업
                </h3>
                <ul className=" space-y-3">
                    {billion?.bio!.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (route) => {
    const billion = await (
        await fetch(`https://billions-api.nomadcoders.workers.dev/person/${route.query.id}`)
    ).json();
    return {
        props: { billion },
    };
};
