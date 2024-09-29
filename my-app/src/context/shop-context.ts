import { createContext } from 'react';
interface ShopContextType {
    progress: boolean; 
    setProgress: (progress: boolean) => void; 
}
export const ShopContext = createContext<ShopContextType>({
    progress: false,
    setProgress: () => { }
});