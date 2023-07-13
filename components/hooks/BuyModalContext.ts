import { createContext } from 'react'

export default createContext({
    menuOpen: false, 
    openMenu: () => {}, 
    closeMenu: () => {},
    updateBundle: (collection, bundle) => {},
})