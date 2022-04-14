import React, {useState} from 'react';
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    accessKey: "kGkWe4wnk47M2nUMwtrK-zYP8fIv3tq19Ujgdmf_Sn4",
})

const SearchPhotos = () => {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const searchPhotos = async(e) => {
        e.preventDefault();
        unsplash.search.photos(query)
            .then(toJson)
            .then((json) => {
            setPics(json.results);
        });
    }

    return (
    <>
    <form className="form" onSubmit={searchPhotos}>
        <label htmlFor="query" className="label">
            {" "}
            📷
        </label>

        <input 
        type="text" 
        name="query" 
        className="input" 
        placeholder={`Try "car" or "bike"`}
        value={query}
        onChange={(e)=>setQuery(e.target.value)} />
        
        <button type="submit" className="button">Search</button>
    </form>
    <div className="card-list">
        {pics.map((pic) => 
            <div className='card' key={pic.id}>
                <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)}
    </div>
    </>
  )
}

export default SearchPhotos;