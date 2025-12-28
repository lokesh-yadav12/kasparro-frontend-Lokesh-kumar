import { AppSidebar } from '@/components/layout/app-sidebar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AppSidebar />
      <main className="flex-1 bg-gray-50 w-full">
        {children}
      </main>
    </div>
  );
}
