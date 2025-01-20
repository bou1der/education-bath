import { api } from "~/server/api";



export default async function RequestsAdmin(){

  const requests = await api.request.index.get()

  console.log(requests.data)
  console.log(requests.data)
  console.log(requests.data)
  console.log(requests.data)
  console.log(requests.data)
  console.log(requests.data)
  console.log(requests.data)
  console.log(requests.data)

  return <h1>Запросы</h1>
}
