'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sun, Moon, Laptop, Clock, Menu, Leaf, Sunset, Waves, Check } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import Image from 'next/image';
import { LogoAnimation } from './logo-animation';

const themes = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
  { name: "System", value: "system", icon: Laptop },
  { name: "Forest", value: "forest", icon: Leaf },
  { name: "Sunset", value: "sunset", icon: Sunset },
  { name: "Ocean", value: "ocean", icon: Waves },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme(); // Use `next-themes` for theme persistence
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // Update every minute
    setTime(new Date()); // Ensure immediate update
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (theme) {
      setLoading(false);
    }
  }, [theme]);

  const routes = [
    { href: '/questions', label: 'Questions' },
    { href: '/bookmarks', label: 'Bookmarks' },
    { href: '/study-plan', label: 'Study Plan' },
  ];

  const getCurrentThemeIcon = () => {
    const currentTheme = themes.find((t) => t.value === theme);
    return currentTheme?.icon || Sun; // Fallback to Sun
  };

  const ThemeIcon = getCurrentThemeIcon();

  if (loading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6 w-full">
            <Skeleton className="h-6 w-6 rounded-lg bg-card" />
            <Skeleton className="h-6 w-24 rounded-md bg-card" />

            <div className="hidden md:flex items-center gap-8">
              <Skeleton className="h-5 w-24 rounded-md bg-card" />
              <Skeleton className="h-5 w-24 rounded-md bg-card" />
              <Skeleton className="h-5 w-24 rounded-md bg-card" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-24 rounded-md bg-card" />
            <Skeleton className="h-8 w-8 rounded-full bg-card" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Logo and Desktop Navigation */}
        <div className="flex items-center gap-6">
          <LogoAnimation>
            <Link href="/" className="flex items-center text-lg group">
              <Image
                height={500}
                width={500}
                src="/logo.png"
                alt="logo"
                className="size-9"
                priority
                loading="eager"
              />
              <span className='hidden sm:inline-block'>
                ProPrep
              </span>
            </Link>
          </LogoAnimation>
          <nav className="hidden md:flex items-center gap-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-primary py-2',
                  pathname === route.href
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                    : 'text-muted-foreground'
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Clock */}
          <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-card">
            <Clock className="h-4 w-4 text-card-foreground" />
            <time className="font-mono text-sm font-medium text-card-foreground">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </time>
          </div>

          {/* Theme Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9 bg-card"
              >
                <ThemeIcon className="h-4 w-4 text-card-foreground" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {themes.map(({ name, value, icon: Icon }) => (
                <DropdownMenuItem
                  key={value}
                  onClick={() => setTheme(value)}
                  className={cn(
                    'flex items-center gap-2',
                    theme === value ? 'bg-primary/10 text-primary font-bold' : ''
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {name}
                  {theme === value && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] p-6 glass-effect">
              <SheetHeader className="mb-8">
                <LogoAnimation>
                  <SheetTitle className="flex items-center gap-1 text-xl">
                    <Image
                      height={500}
                      width={500}
                      src="/logo.png"
                      alt="logo"
                      className="size-9"
                      priority
                      loading="eager"
                    />
                    <span className='text-primary'>ProPrep</span>
                  </SheetTitle>
                </LogoAnimation>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-lg',
                      pathname === route.href ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
