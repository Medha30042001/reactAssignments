import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/todos");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-20 max-w-sm space-y-4">
      <h1 className="text-xl font-semibold">Login</h1>

      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button className="w-full">Login</Button>

      <p className="text-sm text-muted-foreground">
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
};

export default Login;
