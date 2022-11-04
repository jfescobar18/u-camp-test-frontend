import { SearchContent } from "./StyledComponents"
import { Input } from "antd"
const { Search } = Input

export interface IProductSearch {
    onSearch: (value: string) => void
}

const ProductSearch = ({ onSearch }: IProductSearch) => {
    return (
        <>
            <SearchContent>
                <Search
                    placeholder="Buscar un producto"
                    onSearch={onSearch}
                    enterButton
                />
            </SearchContent>
        </>
    )
}

export default ProductSearch
