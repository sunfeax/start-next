export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-md bg-blue-300 border-blue-900 max-w-full h-16 text-3xl flex items-center justify-center border-2">
        BlogLayout
      </div>
      {children}
    </div>
  );
}