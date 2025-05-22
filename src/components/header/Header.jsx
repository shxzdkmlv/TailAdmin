import React, { memo } from 'react';
import { Menu, Search, Bell, Moon } from "lucide-react";

const Header = () => {
  return (
      <header className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
          {/* Left: Burger + Search */}
          <div className="flex items-center gap-3 flex-1 max-w-xl">
              <button className="p-2 rounded-md border hover:bg-gray-100">
                  <Menu size={20} />
              </button>

              <div className="flex items-center border rounded-md px-3 py-2 w-full bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                  <Search size={18} className="text-gray-400 mr-2" />
                  <input
                      type="text"
                      placeholder="Search or type command..."
                      className="bg-transparent outline-none flex-1 text-sm text-gray-700"
                  />
                  <span className="text-xs bg-white border px-2 py-0.5 rounded ml-2 text-gray-400">⌘K</span>
              </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 ml-auto">
              <button className="p-2 rounded-full hover:bg-gray-100">
                  <Moon size={20} />
              </button>

              <div className="relative">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                      <Bell size={20} />
                  </button>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-2">
                  <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700">Musharof</span>
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
              </div>
          </div>
      </header>
  );
};

export default memo(Header);
