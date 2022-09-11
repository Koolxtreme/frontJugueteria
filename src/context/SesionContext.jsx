import {createContext,useContext, useEffect} from 'react';
import profile from '../data/profile.json'

export const SesionContext = createContext();

export function SesionContextProvider(props) {
    const [sesion, setSesion] = useState(false);
    const [profile, setProfile] = useState({});

  return (
    <SesionContext.Provider value={{
        sesion,
        setSesion,
        profile,
        setProfile
    }}>
        {props.children}
    </SesionContext.Provider>
  )
}

export default SesionContext