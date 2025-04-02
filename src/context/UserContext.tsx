
import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  password: string;
}

interface UserContextType {
  users: User[];
  currentUser: User | null;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const register = (email: string, password: string) => {
    setUsers([...users, { email, password }]);
    setCurrentUser(null);
    navigate('/login');
  };

  const login = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      navigate('/upload');
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ users, currentUser, register, login }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
