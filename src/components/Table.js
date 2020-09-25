import React from "react"
import { TableWrapper } from "../elements"

export const Table = ({children}) => {
    return (
        <TableWrapper>
            <table>{children}</table>
        </TableWrapper>
    )
}

//sets up how a table should look on page "table-styling-page"