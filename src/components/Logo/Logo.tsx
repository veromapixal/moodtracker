import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <Brain className="w-8 h-8 text-yellow-600" />
    <span className="font-semibold text-4xl">MoodAI</span>
  </Link>
);