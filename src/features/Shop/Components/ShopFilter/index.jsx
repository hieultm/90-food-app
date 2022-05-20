import { Burger, Drinks, Pizza } from '../../../../utils/shopImages';
import { useContext } from 'react';
import { PrevFilterContext } from '../../../../context/PrevFilterContext';
import { apiContext } from '../../../../context/apiContext';

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
    const { handlePrev } = useContext(PrevFilterContext);
    const { getProducts } = useContext(apiContext);

    const onFilterByCategory = (params) => {
        const { prevName, setPrevName, setNameActive } = handlePrev('name', params);

        if (params !== prevName) {
            getProducts(params);
        }
        setNameActive(params);
        setPrevName(params);
    };
    return (
        <div className="w-[18%] tablet:hidden">
            <h2 className="text-xl mb-3 py-2 pl-3 border-b-[1px] border-solid border-b-zinc-300 font-semibold">
                Popular
            </h2>
            <ul>
                {typeOptions.map(({ img, name, type }) => (
                    <li
                        key={name}
                        className="flex items-center p-3 my-1 rounded-md transition-all delay-100 ease-out hover:bg-zinc-200 cursor-pointer"
                        onClick={() => onFilterByCategory(type)}
                    >
                        <img className="w-6 h-6" src={img} alt={img} />
                        <span className="text-sm capitalize ml-3">{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShopFilter;
