import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f9f9f9' }}>{children}</div>;
}
