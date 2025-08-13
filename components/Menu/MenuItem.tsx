interface MenuItemProps {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
}

export default function MenuItem({
  title,
  price,
  description,
}: MenuItemProps) {
  return (
    // <li className="grid grid-cols-[200px_1fr] gap-6 items-center">
    //   <div className="h-[150px] w-[200px] relative rounded-2xl overflow-hidden">
    //     <Image
    //       src={imageSrc}
    //       alt={title}
    //       fill
    //       className="object-cover"
    //       priority
    //     />
    //   </div>
    //   <div className="text-white flex flex-col">
    //     <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4">
    //       <h2 className="text-2xl">{title}</h2>
    //       <div className="border-b border-dashed border-gray-400/50 opacity-50 self-end mb-1" />
    //       <span className="font-light text-xl">{price}</span>
    //     </div>
    //     <p className="font-light text-lg">{description}</p>
    //   </div>
    // </li>
    <li className="grid grid-cols-1 gap-6 items-center">
      <div className="text-white flex flex-col">
        <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4">
          <h2 className="text-2xl">{title}</h2>
          <div className="border-b border-dashed border-gray-400/50 opacity-50 self-end mb-1" />
          <span className="font-light text-xl">{price}</span>
        </div>
        <p className="font-light text-lg">{description}</p>
      </div>
    </li>
  );
}
