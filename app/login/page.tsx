"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/"); // Redirect to dashboard
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row py-4">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center w-full justify-center bg-background order-2 lg:order-1">
        <div className="w-full max-w-md space-y-6 sm:space-y-8 p-4">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Banking professional at desk"
            className="w-[138px] h-[32px] object-contain"
          />
          <div className="w-full max-w-md space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8">
            {/* Sign In Header */}
            <div className="space-y-2">
              <h1 className="text-xl sm:text-[30px] font-[500] text-black">
                Sign in
              </h1>
              <p className="text-xs sm:text-[16px] text-black">
                If you don't have an account register <br /> You can{" "}
                <Link
                  href="/register"
                  className="text-primary font-[600] text-[16px] hover:underline"
                >
                  Register here !
                </Link>
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[13px] font-[500] text-[#999999]"
                >
                  Email
                </Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-10 sm:h-12 pl-10"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-[13px] font-[500] text-[#999999]"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="h-10 sm:h-12 pl-10 pr-10"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex items-center w-full justify-between">
                  {/* Remember Me */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label
                      htmlFor="remember"
                      className="text-[12px] font-300 text-[#4D4D4D] "
                    >
                      Remember me
                    </Label>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-[12px] font-300 text-[#4D4D4D] hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-10 rounded-[32px] sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Login"}
              </Button>
            </form>

            {/* Additional Options */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                or continue with
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="flex-1 bg-gradient-to-br rounded-[20px] from-primary via-primary to-accent flex items-center justify-center min-h-[300px] lg:min-h-screen order-1 lg:order-2">
        <div className="relative w-full">
          {/* Illustration Container */}
          <div className="relative">
            <img
              src="/banking-illustration.png"
              alt="Banking professional at desk"
              className="w-full h-auto max-h-[250px] sm:max-h-[350px] lg:max-h-none object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
