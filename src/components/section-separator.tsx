

export function SectionSeparator({title}:
  {
    title:string
  }){

  return (
    <div className="flex items-center mx-auto sm:max-w-[35%] justify-between gap-8">
      <div className="w-20 border border-secondary  rounded-full"/>
      <p className="text-secondary">{title}</p>
      <div className="w-20 border border-secondary  rounded-full"/>
    </div>
  )
}
