import { createContext, Dispatch, ReactNode, SetStateAction, useId, useState } from 'react'

const initialState = {
  sideNavigation: {
    id: '',
    setId: () => '',
    isExpanded: true,
    setIsExpanded: () => true,
  },
  main: {
    id: '',
    setId: () => '',
  },
  aside: {
    id: '',
    isExpanded: false,
    setIsExpanded: () => false,
  },
}

export const PageLayoutContext = createContext<{
  sideNavigation: {
    id: string
    setId: Dispatch<SetStateAction<string>>
    isExpanded: boolean
    setIsExpanded: Dispatch<SetStateAction<boolean>>
  }
  main: {
    id: string
    setId: Dispatch<SetStateAction<string>>
  }
  aside: {
    id: string
    isExpanded: boolean
    setIsExpanded: Dispatch<SetStateAction<boolean>>
  }
}>(initialState)

export const PageLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [sideNavId, setSideNavId] = useState<string>(undefined)
  const [mainId, setMainId] = useState<string>(undefined)
  const [isSideNavExpanded, setIsSideNavExpanded] = useState<boolean>(true)
  const [isAsideExpanded, setIsAsideExpanded] = useState<boolean>(false)

  return (
    <PageLayoutContext.Provider
      value={{
        sideNavigation: {
          id: sideNavId,
          setId: setSideNavId,
          isExpanded: isSideNavExpanded,
          setIsExpanded: setIsSideNavExpanded,
        },
        main: {
          id: mainId,
          setId: setMainId,
        },
        aside: {
          id: useId(),
          isExpanded: isAsideExpanded,
          setIsExpanded: setIsAsideExpanded,
        },
      }}
    >
      {children}
    </PageLayoutContext.Provider>
  )
}
