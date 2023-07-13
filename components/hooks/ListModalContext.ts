import { createContext } from 'react'

export default createContext({
    menuOpen: false, 
    openMenu: () => {}, 
    closeMenu: () => {},
    updateSelectedItems: (collection, items, currency) => {}
})