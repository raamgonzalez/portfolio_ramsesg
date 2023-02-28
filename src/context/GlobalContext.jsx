import { createContext } from "react";
import { data } from '../data/data';

export const GlobalContext = createContext('');

const GlobalContextProvider = ({ children }) => {

    const { projects, softwares, rrss } = data;

    const scrollingProjects = {
        hidden: {
            x: -100,
        },
        visible: {
          x: 0,
          transition:{
            type: 'spring',
            duration: 0.1
          }
        }
      }

      const scrollingSkills = {
        hidden: {
            x: -100,
        },
        visible: {
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
            scrollingProjects,
            scrollingSkills,
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;