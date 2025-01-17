import { Toilet } from "lucide-react"
import Link from "./ui/link"
import { Button } from "./ui/button"


export const NavigateItems = [
  {
    href:"/",
    title:"Домики",
  },
  {
    href:"/",
    title:"Услуги",
  },
  {
    href:"/",
    title:"Отзывы",
  },
  {
    href:"/",
    title:"Вопросы?",
  },
  {
    href:"/",
    title:"Контакты?",
  },
]

export function Navbar(){

  return (
    <div className="sticky z-40 top-0 min-h-14 p-4 bg-background bg-opacity-70 backdrop-blur-sm">
      <div className="size-full justify-between flex">
        <div className="flex gap-3 basis-1/3">
          {
            NavigateItems.map((el, index) => (
              <Link className="rounded-sm text-xl hover:bg-white/0" variant={"underline"} key={index} href={el.href} >
                {el.title}
              </Link>
            ))
          }
        </div>

        <div className="basis-1/3 relative">
          <Link href={"/"} size={"icon"} className=" left-1/2 -translate-x-1/2 absolute size-20 p-4 rounded-full text-secondary-foreground">
            <Toilet className="size-full" />
          </Link>
        </div>

        <div className="basis-1/3">
          <Button className="rounded-2xl text-xl  ml-auto block" variant={"secondary"} >
            Онлайн-бронирование
          </Button>
        </div>
      </div>
    </div>
  )
}
