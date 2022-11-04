import ProductSearch from "../../Components/ProductSearch"
import Catalog from "../../Components/Catalog"
import axios from "axios"
import { useEffect, useState } from "react"
import { Product } from "../../Types"
import { PaginationProps } from "antd"

const SearchContainer = () => {
    const [searchResults, setSearchResults] = useState<Product[]>([])
    const [currentItems, setCurrentItems] = useState<Product[]>([])
    const [current, setCurrent] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 30

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage

        setCurrentItems(searchResults.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(searchResults.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, searchResults])

    const onSearch = (value: string) => {
        axios
            .get(`http://localhost:3000/api/search/${value}`)
            .then((res) => {
                setSearchResults(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onChange: PaginationProps["onChange"] = (page) => {
        const newOffset = (page * itemsPerPage) % searchResults.length
        setItemOffset(newOffset)
        setCurrent(page)
    }

    return (
        <>
            <ProductSearch onSearch={onSearch} />
            <Catalog
                currentItems={currentItems}
                onChange={onChange}
                current={current}
                pageCount={pageCount}
            />
        </>
    )
}

export default SearchContainer
