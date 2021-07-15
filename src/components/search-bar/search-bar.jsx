import { useState } from "react"

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSearch(search);
        setSearch('');
    }

    const submitDisable = search.trim() === '';

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={search} 
                onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" disabled={submitDisable}>Rechercher</button>
        </form>
    )
}

SearchBar.defaultProps = {
    onSearch: () => {}
}

export default SearchBar;