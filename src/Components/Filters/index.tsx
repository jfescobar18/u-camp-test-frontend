import { Select, Switch } from "antd"
import { Dispatch, SetStateAction } from "react"
import { Product } from "../../Types"
import { FiltersContent, ConditionFilter } from "./styledComponents"

export interface IFilters {
    filterCondition: (value: string) => void
    filterPrice: (value: string) => void
}

const Filters = ({ filterCondition, filterPrice }: IFilters) => {
    return (
        <>
            <FiltersContent>
                <ConditionFilter>
                    Condición
                    <Select
                        defaultValue="null"
                        style={{ width: 120 }}
                        onChange={filterCondition}
                        options={[
                            {
                                value: "null",
                                label: "Selecciona",
                                disabled: true,
                            },
                            {
                                value: "new",
                                label: "Nuevo",
                            },
                            {
                                value: "used",
                                label: "Usado",
                            },
                        ]}
                    />
                </ConditionFilter>
                <ConditionFilter>
                    Precio
                    <Select
                        defaultValue="null"
                        style={{ width: 120 }}
                        onChange={filterPrice}
                        options={[
                            {
                                value: "null",
                                label: "Selecciona",
                                disabled: true,
                            },
                            {
                                value: "more",
                                label: "Más alto a más bajo",
                            },
                            {
                                value: "less",
                                label: "Más bajo a más alto",
                            },
                        ]}
                    />
                </ConditionFilter>
            </FiltersContent>
        </>
    )
}

export default Filters
