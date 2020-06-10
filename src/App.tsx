import React from 'react';
import { ShoppingCard } from './components/ShoppingCard/ShoppingCard';
import { NavBar } from './components/NavBar/NavBar';
import { CoverPhoto } from './components/CoverPhoto/CoverPhoto';
import './App.css';
import { useSelector } from 'react-redux';
import { PRODUCT } from './types/fashionTypes';

export const RootContext: React.Context<any> = React.createContext(0); 

function App() {
    //@ts-ignore
    let fashionState = useSelector(state => state.Fashion);

  return (
      <div>
          <NavBar />
          <CoverPhoto />

          <div className={'shoppingItems'}>
          {
                  fashionState.items.map((value: PRODUCT, index: number) =>
                      //@ts-ignore
                      <RootContext.Provider value={{ item: value }} key={index}>
                      <ShoppingCard />
                      </RootContext.Provider>)
          }
          </div>

    </div>
  );
}

export default App;
