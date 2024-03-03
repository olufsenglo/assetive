import SquarePlusIcon from "./icons/square-plus.svg?component";
import LayoutIcon from "./icons/layout.svg?component";
import Palette from "./icons/palette.svg?component";
import FileIcon from "./icons/file.svg?component";
import ImageIcon from "./icons/image.svg?component";

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <img className="h-11 w-11" src="/img/logo.png" alt="" />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
          >
            <SquarePlusIcon className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <LayoutIcon className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <Palette className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <FileIcon className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <ImageIcon className="h-6 w-6 fill-current" />
          </a>
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
