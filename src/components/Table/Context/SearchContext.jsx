import {createContext, useState} from "react";

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
	const [search, setSearch] = useState('ça marche')
	return (
		<SearchContext.Provider value={{search, setSearch}}>
			{props.children}
		</SearchContext.Provider>
	)
}

export default SearchContextProvider
