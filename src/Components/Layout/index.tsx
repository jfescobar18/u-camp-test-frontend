import { LayoutContent } from "./StyledComponents"

export interface ILayout {
    children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <LayoutContent>{children}</LayoutContent>
        </>
    )
}

export default Layout
