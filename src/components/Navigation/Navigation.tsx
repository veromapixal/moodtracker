import { NavButton } from '../NavButton/NavButton';
import { Logo } from '../Logo/Logo';

export const Navigation = () => (
  <header className="h-[100px] flex items-center px-8 relative">
    <nav className="flex gap-[350px] items-center">
      <div className="bg-[#FFFDC6] h-[80px] px-8 flex items-center">
        <Logo />
      </div>
      <NavButton to="/about"><h1 className="text-4xl font mb-4">About</h1></NavButton>
      <NavButton to="/signup"><h1 className="text-4xl font mb-4">Sign Up</h1></NavButton>
    </nav>
    <div className="ml-auto">
      <NavButton to="/try-out"><h1 className="text-4xl font mb-4">Try Out</h1></NavButton>
    </div>
  </header>
);