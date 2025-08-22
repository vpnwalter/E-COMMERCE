import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock authentication - in a real app, this would call your auth service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let role: 'admin' | 'seller' | 'buyer' = 'buyer';
    
    if (email.includes('admin')) {
      role = 'admin';
    } else if (email.includes('seller')) {
      role = 'seller';
    }
    
    setUser({
      id: '1',
      name: 'John Smith',
      email: email,
      role: role
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}