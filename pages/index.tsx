import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
interface HomeProps {
    billions: Billions[];
}
interface Billions {
    id: string;
    name: string;
    squareImage: string;
    netWorth: number;
    industries: any;
}
interface MapProps {
    item: Billions;
    index: number;
}

const Home: NextPage<HomeProps> = ({ billions }: HomeProps) => {
    const result = billions.map((item, index) => {
        return (
            <div key={index} className="mx-auto flex w-full flex-col items-center justify-center">
                <span className=" truncate text-center font-black text-slate-600">{item.id}</span>
                <Link href={`/person/${item.id}`}>
                    <img
                        src={item.squareImage}
                        alt="#"
                        className=" aspect-square max-w-[150px] cursor-pointer rounded-xl"
                    />
                </Link>
            </div>
        );
    });
    return (
        <div className="flex w-full flex-col items-center justify-center bg-slate-200">
            <div className="mt-32 rounded-2xl bg-slate-300 px-20 py-3 font-sans text-[40px] font-extrabold text-slate-600 ">
                천만장자들
            </div>
            <div className=" mx-auto grid max-w-screen-2xl grid-cols-4 gap-10 pt-32">{result}</div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const billions = await (await fetch("https://billions-api.nomadcoders.workers.dev/")).json();
    return {
        props: { billions },
    };
};

export default Home;
