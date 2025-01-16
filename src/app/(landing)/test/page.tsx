'use client'
import { useSuspenseQuery } from "@tanstack/react-query";
import { api } from "~/lib/client/api";

export default function TestPage(){

  const { data:res, ...query} = useSuspenseQuery({
    queryKey:["getAllBaths"],
    queryFn: async () => {
      return await api.bath({id:"asdasd"}).get()
    },
  })

}
