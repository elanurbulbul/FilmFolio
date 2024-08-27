import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// AuthContext sağlayıcısı
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // LocalStorage'dan kullanıcı bilgisini al
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signIn = (userData) => {
    // Kullanıcıyı state ve localStorage'da ayarla
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const signOut = () => {
    // Kullanıcıyı state ve localStorage'dan kaldır
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext'i kullanmak için hook
export const useAuth = () => {
  return useContext(AuthContext);
};
