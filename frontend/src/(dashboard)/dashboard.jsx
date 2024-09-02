import React from "react";
import TableUser from "../components/users/tableUser.jsx";
import TableNewRecipe from "../components/newRecipe/tableNewRecipe.jsx";

export default function Dashboard() {
    return (
        <div>
            <h2>Dashboard Page</h2>
            <TableUser />
            <TableNewRecipe />
        </div>
    );
}