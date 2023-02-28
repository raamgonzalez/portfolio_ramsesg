import { createContext } from "react";
import { data } from '../data/data';

export const GlobalContext = createContext('');

const GlobalContextProvider = ({ children }) => {

    const { projects, softwares, rrss } = data;

    const scrollingProjects = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition:{
            type: 'spring',
            duration: 1
          }
        }
      }

    return (
        <GlobalContext.Provider value={{ 
            projects,
            softwares,
            rrss,
            scrollingProjects
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;