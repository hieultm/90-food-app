import { Burger, Drinks, Pizza } from "../../../../utils/shopImages";

const typeOptions = [
    {
      img: Burger,
      name: 'Burgers',
      type: 'burgers',
    },
    {
      img: Drinks,
      name: 'Drinks',
      type: 'drinks',
    },
    {
      img: Pizza,
      name: 'Pizzas',
      type: 'pizzas',
    },
  ];

function ShopFilter() {
    return (
      <div className="w-[18%] tablet:hidden">
        <h2 className="text-xl mb-3 py-2 pl-3 border-b-[1px] border-solid border-b-zinc-300 font-semibold">
            Popular
        </h2>
        <ul>
        {typeOptions.map(({img, name, type}) => (
            <li
                key={name}
                className="flex items-center p-3 my-1 rounded-md transition-all delay-100 ease-out hover:bg-zinc-200 cursor-pointer"
            >
                <img 
                  className="w-6 h-6"
                  src={img} 
                  alt={img} 
                />
                <span className="text-sm capitalize ml-3">
                    {name}
                </span>
            </li>
        ))}
        </ul>
      </div>
    )
}

export default ShopFilter