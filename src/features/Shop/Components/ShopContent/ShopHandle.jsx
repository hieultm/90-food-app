import { useEffect, useRef, useState, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { filterByOrder, searchByName } from '../../shopSlice';
import { PrevFilterContext } from '../../../../context/PrevFilterContext';
import { apiContext } from '../../../../context/apiContext';

const dataTypes = [
    {
        value: 'Price: Low to High',
        sort: 'price_asc',
    },
    {
        value: 'Price: High to Low',
        sort: 'price_desc',
    },
];
function ShopHandle() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [isDrop, setIsDrop] = useState(false);
    const ref = useRef();

    const { getProducts } = useContext(apiContext);

    const { handlePrev } = useContext(PrevFilterContext);
    const { selectedDrop, setSelectedDrop, setPrevSearch } = handlePrev();

    useEffect(() => {
        const handleClickDrop = (e) => {
            const el = ref.current;

            if (el && el.contains(e.target)) {
                setIsDrop(!isDrop);
            } else {
                setIsDrop(false);
            }
        };

        window.addEventListener('click', handleClickDrop);

        return window.addEventListener('click', handleClickDrop);
    }, [isDrop]);

    const onFilterBySort = (sort, value) => {
        handlePrev('sort');
        const action = filterByOrder(sort);
        dispatch(action);

        setSelectedDrop(value);
    };

    const handleSubmitSearch = (e) => {
        handlePrev('search');
        e.preventDefault();

        if (!inputValue) return;

        const query = { name_like: inputValue };

        getProducts('our-foods', query);
        setInputValue('');
        setPrevSearch(query);
    };

    const handleSearchTextChange = (e) => {
        let result = e.target.value;
        setInputValue(result);
        const action = searchByName(result);
        console.log(action);
        dispatch(action);
    };

    return (
        <div className="flex items-start tablet:mb-5">
            <form
                className="flex flex-1 items-center rounded-[20px] py-1 pl-4 pr-2
                border-zinc-400 border-[1px] border-solid ml-8"
                onSubmit={handleSubmitSearch}
            >
                <input
                    onChange={handleSearchTextChange}
                    placeholder="Search your product"
                    className="outline-none border-0 w-full"
                    value={inputValue}
                />
                <button className="w-8 h-8 ml-auto bg-none">
                    <SearchIcon className="!w-6 !h-full !text-center !fill-zinc-400" />
                </button>
            </form>
            <div className="relative ml-5">
                <div
                    className="flex items-center px-4 py-2 min-w-[165px] cursor-pointer
                    border-[1px] border-solid border-zinc-400 rounded-md"
                    ref={ref}
                >
                    <span>{selectedDrop}</span>
                    <ExpandMoreIcon className="!ml-auto" />
                </div>
                <ul
                    className={
                        isDrop
                            ? 'absolute z-[999] border-[1px] border-solid border-zinc-400 rounded-md mt-2 py-2 shadow-dropList translate-y-3 visible opacity-1 bg-white w-full transition-all cursor-pointer'
                            : 'absolute z-[999] border-[1px] border-solid border-zinc-400 rounded-md mt-2 py-2 shadow-dropList translate-y-3 invisible opacity-0 bg-white w-full transition-all cursor-pointer'
                    }
                >
                    {dataTypes.map(({ sort, value }, index) => (
                        <li
                            className="text-sm px-4 py-2 transition-all hover:bg-zinc-300"
                            key={index}
                            onClick={() => onFilterBySort(sort, value)}
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ShopHandle;
