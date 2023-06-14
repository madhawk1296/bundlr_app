import { createContext } from "react";

const changeSortPlaceholder = ({value, title}) => {};
const toggleDirectionPlaceholder = () => {};

export default createContext({
    sort: {value: "name", title: "Name"}, 
    changeSort: changeSortPlaceholder, 
    isAscending: true, 
    toggleDirection: toggleDirectionPlaceholder
});
