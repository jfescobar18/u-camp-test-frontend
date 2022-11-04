import { Pagination } from "antd"
import { Product } from "../../Types"
import ProductCard from "../ProductCard"
import { CatalogContent, PaginationContent } from "./StyledComponents"

export interface ICatalog {
    currentItems: Product[]
    onChange: (page: number, pageSize: number) => void
    current: number
    pageCount: number
}

const Catalog = ({ currentItems, onChange, current, pageCount }: ICatalog) => {
    return (
        <>
            <CatalogContent>
                {currentItems.map((product) => {
                    return <ProductCard product={product} />
                })}
                <PaginationContent>
                    <Pagination
                        onChange={onChange}
                        current={current}
                        total={pageCount}
                        defaultPageSize={1}
                    />
                </PaginationContent>
            </CatalogContent>
        </>
    )
}

export default Catalog
