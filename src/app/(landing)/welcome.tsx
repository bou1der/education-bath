import { Button } from "~/components/ui/button";


export function WelcomeSection(){
  return (
    <div className="min-h-screen container flex justify-start items-center">
      <div className="space-y-8 sm:-mt-40">
        <h1 className="max-w-[700px] "> «Анальная гора» — банный комплекс, расположенный у карьера </h1>
        <Button className="text-2xl py-8 w-full sm:w-auto sm:px-16 rounded-3xl">
          Забронировать домик
        </Button>
      </div>
    </div>
  )
}
