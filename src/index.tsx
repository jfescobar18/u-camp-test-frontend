import React from "react"
import ReactDOM from "react-dom/client"
import SearchContainer from "./Containers/SearchContainer"
import "antd/dist/antd.css"
import Layout from "./Components/Layout"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <Layout>
            <SearchContainer />
        </Layout>
    </React.StrictMode>
)
