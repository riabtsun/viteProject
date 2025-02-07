import { createContext, PropsWithChildren, useState } from 'react';

interface UserContextValue {
  name: string;
  setName: (newName: string) => void;
}

export const UserContextProvider = createContext<UserContextValue | null>(null);
UserContextProvider.displayName = 'UserContext';
const UserContext = ({ children }: PropsWithChildren) => {
  const [userName, setUserName] = useState<string>('');

  const handleChangeName = (newName: string): void => {
    setUserName(newName);
  };

  const userData = { name: userName, setName: handleChangeName };

  return (
    <UserContextProvider.Provider value={userData}>
      {children}
    </UserContextProvider.Provider>
  );
};

export default UserContext;
