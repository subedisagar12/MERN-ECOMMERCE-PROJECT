import React from 'react'
import Searchbar from '../components/Search/Searchbar'
import ProductCard from '../components/ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'

function SearchPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log({searchParams})
  return (
    <div>
        <h1>Search Results {searchParams?.get("search_term")}</h1>
        <div className="container my-5">
      <div className="row">
    
        {[...Array(10)]?.map((item)=><div className="col-3">
          <ProductCard />
        </div>)}
        </div>
        </div>
    </div>
  )
}

export default SearchPage
