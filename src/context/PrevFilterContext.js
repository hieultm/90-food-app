import { createContext, useState } from 'react';

export const PrevFilterContext = createContext();

function PrevFilterProvider({ children }) {
    const [prevName, setPrevName] = useState(null);
    const [selectedDrop, setSelectedDrop] = useState('Featured');
    const [prevSearch, setPrevSearch] = useState(null);
    const [nameActive, setNameActive] = useState(null);

    const handlePrev = (type, value) => {
        switch (type) {
            case 'name':
                setPrevName(value);
                setSelectedDrop('Featured');
                break;
            case 'sort':
                setSelectedDrop('Featured');
                break;
            case 'drop':
                setSelectedDrop(value);
                break;
            case 'search':
                setPrevName(null);
                setSelectedDrop('Featured');
                setNameActive(null);
                break;
            default:
                break;
        }

        return {
            prevName,
            setPrevName,
            selectedDrop,
            setSelectedDrop,
            prevSearch,
            setPrevSearch,
            nameActive,
            setNameActive,
        };
    };

    return <PrevFilterContext.Provider value={{ handlePrev }}> {children} </PrevFilterContext.Provider>;
}

export default PrevFilterProvider;
