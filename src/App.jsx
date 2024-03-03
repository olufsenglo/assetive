
function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        </nav>
      </aside>
      <div className="flex h-screen flex-1 flex-col">
        <header className="flex h-18 items-center justify-center gap-x-6 border-b border-gray-200 bg-white px-8">
        </header>
        <main className="flex-1 overflow-y-scroll px-12">
          <div className="my-12 bg-white">
          </div>
        </main>
      </div>
      <aside className="flex h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
      </aside>
    </div>
  );
}

export default App;
