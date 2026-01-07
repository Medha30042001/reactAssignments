import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
    
    const { user, logout } = useAuth()

  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <h1 className="text-xl font-semibold">Todos</h1>

      {user && (
        <Button variant="outline" onClick={logout}>
          Sign Out
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
