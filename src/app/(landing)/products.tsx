import { SectionSeparator } from "~/components/section-separator";
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";

const ProductItems = [
  {
    title:"Акция '4 ЧАСА В ПОДАРОК'",
    description:"При бронировании 20 часов 4 часа в подарок",
    image:"https://static.tildacdn.com/tild6461-6136-4664-a437-613331363438/interior-wooden-russ.jpg",
  },
  {
    title:"Акция '4 ЧАСА В ПОДАРОК'",
    description:"При бронировании 20 часов 4 часа в подарок",
    image:"https://static.tildacdn.com/tild6461-6136-4664-a437-613331363438/interior-wooden-russ.jpg",
  },
  {
    title:"Акция '4 ЧАСА В ПОДАРОК'",
    description:"При бронировании 20 часов 4 часа в подарок",
    image:"https://static.tildacdn.com/tild6461-6136-4664-a437-613331363438/interior-wooden-russ.jpg",
  },
  {
    title:"Акция '4 ЧАСА В ПОДАРОК'",
    description:"При бронировании 20 часов 4 часа в подарок",
    image:"https://static.tildacdn.com/tild6461-6136-4664-a437-613331363438/interior-wooden-russ.jpg",
  },
]
export function ProductsSection(){
  return (
    <div className="flex flex-col w-full space-y-16 py-12">
      <div className="container space-y-16">
        <SectionSeparator title="Акции" />
        <div>
          <h1 className="text-center">
             МЫ ЦЕНИМ 
          </h1>
          <h1 className="text-center indent-64">
            наших гостей
          </h1>
        </div>

      </div>
      <Carousel opts={{
        loop:true
      }}>
        <CarouselContent className="gap-8">
          {
            ProductItems.map((product) => (
              <CarouselItem className="basis-[100%] sm:basis-1/2 mx-3 relative h-[480px] overflow-hidden rounded-3xl p-0">
                <img src={product.image} alt="" className="absolute object-cover size-full" />
                <div className="min-h-[15%] space-y-4 py-4 absolute w-full bottom-0 bg-white z-10 ">
                  <p className="text-2xl text-center text-secondary">{product.title}</p>
                  <p className="text-xl text-center text-secondary">{product.description}</p>
                </div>

              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
    </div>
  )
}
