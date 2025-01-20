import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel"
import { BedDouble, ShowerHead, Toilet, UsersRound, WashingMachineIcon, Wifi } from "lucide-react"
import { Separator } from "~/components/ui/separator"
import { Button } from "~/components/ui/button"

const baths = [
  {
    title:" Большой банный домик №1",
    image:"https://optim.tildacdn.com/tild6165-3464-4134-b466-326666353362/-/resize/600x400/-/format/webp/0D0A2006.png",
    maxGuests:15,
    price:5000,
    maxPrice:6000,
  },
  {
    title:" Большой банный домик №1",
    image:"https://optim.tildacdn.com/tild6165-3464-4134-b466-326666353362/-/resize/600x400/-/format/webp/0D0A2006.png",
    maxGuests:10,
    price:5000,
    maxPrice:6000,
  },
  {
    title:" Большой банный домик №1",
    image:"https://optim.tildacdn.com/tild6165-3464-4134-b466-326666353362/-/resize/600x400/-/format/webp/0D0A2006.png",
    maxGuests:6,
    price:5000,
    maxPrice:6000,
  },
]

export function BathSection(){


  return (
    <div className="w-full space-y-20 py-20">
      <div className="container space-y-10">
        <h1 className=" text-center text-8xl">Наши домики</h1>
        <p className="max-w-[790px] text-2xl text-center mx-auto">В нашем банном комплексе вас ждёт русская баня с традиционным паром на дровах, погружающим в атмосферу тепла. Отдохните в уютных парилках или организуйте весёлую вечеринку в специально оборудованных зонах. Гарантируем отличное настроение и незабываемые впечатления!</p>
      </div>

      <Carousel opts={{
        loop:true
      }}>
        <CarouselContent className="gap-4 ml-auto py-8">
          {
            baths.map((b, index) => (
              <CarouselItem key={index} className="flex basis-[90%] gap-8 rounded-2xl shadow-lg max-h-[540px] bg-white p-4 mx-4">
                <img src={b.image} className="w-[60%] object-cover rounded-2xl" alt="" />
                <div className="flex flex-col bg-background grow space-y-6 p-6 h-full">
                  <h3 className="text-left font-light">{b.title}</h3>
                  <div className="flex gap-8">
                    <div className="flex items-center gap-1">
                      <UsersRound className="size-6" />
                      <p>до {b.maxGuests} гостей</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <BedDouble className="size-6" />
                      <p>Двуспальная кровать</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex flex-col space-y-4 grow">
                    <p className="font-bold text-primary">Какие удобства вас ждут</p>
                    <div className="flex items-center gap-1">
                      <Toilet />
                      Санузел
                    </div>

                    <div className="flex items-center gap-1">
                      <Wifi />
                      Wi-fi
                    </div>
                    <div className="flex items-center gap-1">
                      <ShowerHead />
                      Душ
                    </div>
                    <div className="flex items-center gap-1">
                      <WashingMachineIcon />
                      Стиральная машина
                    </div>
                  </div>
                  <Separator />

                  <div className="flex justify-between items-stretch">
                    <div>
                      <h4>пн-пт {b.price} / час</h4>
                      <h4> сб-вс {b.maxPrice} / час</h4>
                    </div>

                    <Button className="h-full px-8 text-2xl rounded-2xl">
                      Забронировать
                    </Button>
                  </div>

                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
    </div>
  )
}

