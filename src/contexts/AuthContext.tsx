import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  avatar?: string;
  discriminator: string;
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  loginWithDiscord: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const loginWithDiscord = () => {
    const mockDiscordUser = {
      id: '123456789',
      username: 'DiscordUser',
      discriminator: '1234',
      avatar: `https://cdn.discordapp.com/avatars/123456789/example.png`
    };
    
    setUser(mockDiscordUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockDiscordUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loginWithDiscord, logout }}>
      {children}
    </AuthContext.Provider>
  );
};