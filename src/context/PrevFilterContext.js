import { createContext, useState } from "react";


export const PrevFilterContext = createContext();

function PrevFilterProvider({ children }) {
    const [selectedDrop, setSelectedDrop] = useState("Featured");   

    const handlePrev = (type, value) => {
        switch (type) {
            case "sort" :
                setSelectedDrop("Featured");
                break;
            case "drop" :
                setSelectedDrop(value)
                break;
            default:
                break;
        }

        return {
            selectedDrop,
            setSelectedDrop
        }
    }

    return (
        <PrevFilterContext.Provider value={{ handlePrev }}>
          {children}
        </PrevFilterContext.Provider>
      );
}

export default PrevFilterProvider