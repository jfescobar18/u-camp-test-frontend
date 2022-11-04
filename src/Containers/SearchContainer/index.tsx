import ProductSearch from "../../Components/ProductSearch"
import Catalog from "../../Components/Catalog"
import axios from "axios"
import { useEffect, useState } from "react"
import { Product } from "../../Types"
import { PaginationProps } from "antd"
import Filters from "../../Components/Filters"

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
    }, [itemOffset, searchResults])

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

    const filterCondition = (value: string) => {
        const filteredProducts = searchResults.filter(function (product) {
            return product.condition === value
        })

        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(filteredProducts.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(filteredProducts.length / itemsPerPage))
    }

    const filterPrice = (value: string) => {
        if (value === "more") {
            const filteredProducts = searchResults.sort(
                (a, b) => b.price - a.price
            )
            const endOffset = itemOffset + itemsPerPage
            setCurrentItems(filteredProducts.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(filteredProducts.length / itemsPerPage))
        } else {
            const filteredProducts = searchResults.sort(
                (a, b) => a.price - b.price
            )
            const endOffset = itemOffset + itemsPerPage
            setCurrentItems(filteredProducts.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(filteredProducts.length / itemsPerPage))
        }
    }

    return (
        <>
            <ProductSearch onSearch={onSearch} />

            <Filters
                filterCondition={filterCondition}
                filterPrice={filterPrice}
            />

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
