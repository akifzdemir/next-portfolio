"use client";
import { useState } from "react";
import useSWR from "swr";
import Card from "./Card";
import { fetcher } from "../lib/fetcher";
import { Loader2 } from "lucide-react";

export default function Repositories() {
  const [size, setSize] = useState(4);

  const { data, isLoading, error } = useSWR(
    `https://api.github.com/users/akifzdemir/repos`,
    fetcher
  );

  if (error) return <div>{error?.message || error}</div>;

  return (
    <div id="repos" className="flex flex-col gap-12 pb-32">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-8xl lg:text-6xl">Repositories</h1>
        <p className="opacity-60 font-light">My Github Repositories</p>
      </div>
      {isLoading ? (
        <div className="flex w-full items-center animate-spin justify-center">
          <Loader2 size={80} strokeWidth={3} />
        </div>
      ) : (
        <div className="flex flex-col">
          {data
            ?.sort((a, b) => b.watchers - a.watchers)
            ?.slice(0, size)
            ?.map((repo, i) => (
              <Card key={repo.id} repo={repo} />
            ))}
          <div className="flex flex-row w-full mt-6 items-center justify-center">
            <>
              <button
                disabled={data?.length <= size}
                className="text-center disabled:opacity-40 flex justify-center p-10 items-center flex-1"
                onClick={() => setSize((size) => size + 4)}
              >
                Show More
              </button>
            </>
          </div>
        </div>
      )}
    </div>
  );
}
