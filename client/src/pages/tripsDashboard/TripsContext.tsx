import { createContext, useContext, useState, type ReactNode } from "react";

interface TripsContextProps {
    search: string;
    setSearch: (value: string) => void;
}

export const TripsContext = createContext<TripsContextProps | undefined>(undefined);

export function TripsProvider({ children }:{children: ReactNode}) {

    const [search, setSearch] = useState("");

    return (
        <TripsContext.Provider value={{ search, setSearch }}>
            {children}
        </TripsContext.Provider>
    );
}


export function useTripsContext() {
  const context = useContext(TripsContext);

  if (!context) {
    throw new Error(
      'useTripsContext must be inside TripProvider'
    );
  }

  return context;
}