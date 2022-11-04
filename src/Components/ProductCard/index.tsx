import { Product } from "../../Types"
import { formatMoney } from "../../Utils"
import {
    ProductCardContent,
    DetailsContainer,
    Title,
    Price,
    Condition,
    Status,
    ImageContainer,
    ProductImage,
} from "./StyledComponents"

export interface IProductCard {
    product: Product
}

const ProductCard = ({ product }: IProductCard) => {
    return (
        <>
            <ProductCardContent>
                <DetailsContainer>
                    <Title>{product.title}</Title>
                    <Price>{formatMoney(product.price)}</Price>
                    <Condition>
                        {product.condition === "used" ? "Usado" : "Nuevo"}
                    </Condition>
                    <Status>
                        {product.available_quantity > 0
                            ? "Disponible"
                            : "No Disponible"}
                    </Status>
                </DetailsContainer>
                <ImageContainer>
                    <ProductImage src={product.thumbnail} />
                </ImageContainer>
            </ProductCardContent>
        </>
    )
}

export default ProductCard
