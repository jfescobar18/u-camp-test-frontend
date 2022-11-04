export const formatMoney = (value: number): string => {
    const money = value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })

    return money
}

export const paginateResults = () => {}
