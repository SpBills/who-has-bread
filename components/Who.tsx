"use client"

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Who({ path }: { path: string }) {
  const { data, isLoading, error } = useSWR(path, fetcher);

  if (isLoading) {
    return <p className="animate-pulse dark:bg-gray-500 bg-gray-200 w-40 h-10 rounded" />
  }

  if (error) {
    return <p className="text-red-500">Error</p>
  }


  return <p>{data.person} - {data.date}</p>
}