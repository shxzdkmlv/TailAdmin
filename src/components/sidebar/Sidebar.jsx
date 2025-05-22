import {
    AppstoreOutlined,
    DownOutlined,
    FileOutlined,
    MailOutlined,
    MessageOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TableChartSharpIcon from '@mui/icons-material/TableChartSharp';

const NavItem = ({ icon, label, to, children }) => {
    const [open, setOpen] = useState(false);

    const baseClass = "flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-all";
    const activeClass = "bg-blue-100 text-blue-600";
    const inactiveClass = "text-gray-700 hover:bg-gray-100";

    return (
        <div>
            <NavLink
                to={to}
                onClick={() => {
                    if (children) setOpen(!open);
                }}
                className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
            >
                <div className="flex items-center gap-3">
                    {icon}
                    <span>{label}</span>
                </div>
                {children && (
                    <DownOutlined className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                )}
            </NavLink>

            {open && children && <div className="pl-8">{children}</div>}
        </div>
    );
};

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen border-r px-4 py-6 bg-white flex flex-col gap-6">
            <div className="flex items-center gap-2 px-2 text-blue-600 text-2xl font-bold">
                <AppstoreOutlined />
                TailAdmin
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-xs text-gray-400 font-medium uppercase px-2">Menu</p>

                <NavItem icon={<SpaceDashboardIcon />} label="Dashboard" to="/dashboard" />
                <NavItem icon={<CalendarMonthIcon />} label="Calendar" to="/calendar" />
                <NavItem icon={<AccountCircleIcon />} label="User Profile" to="/profile" />
                <NavItem icon={<FormatListBulletedIcon />} label="Forms" to="/forms" />
                <NavItem icon={<TableChartSharpIcon />} label="Tables" to="/tables" />
                <NavItem icon={<FileOutlined />} label="Pages" to="/pages" />
            </div>

           {/* <div className="flex flex-col gap-4 mt-6">
                <p className="text-xs text-gray-400 font-medium uppercase px-2">Support</p>
                <NavItem icon={<MessageOutlined />} label="Chat" to="/chat" />
                <NavItem icon={<MailOutlined />} label="Email" to="/email" />
            </div>*/}
        </aside>
    );
}
