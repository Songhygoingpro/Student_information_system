import React, { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import { useUser } from "../../contexts/UserContext";
import facultyBg from '../../assets/images/faculty-heading-bg.png';

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const { user, isAuthenticated, logout } = useUser();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        setIsDropdownOpen(false);
    };

    return (
        <div className="default-layout w-full">
            {/* Add your header, sidebar, or navigation here */}
            <header className="flex px-5 py-3 h-fit">
                <div className="header__inner mx-auto max-w-[1200px] w-full flex justify-between items-center gap-6 bg-white">
                    <Link to="/" className="site-logo bg-blue-500 !text-white text-3xl font-bold text-center px-4 py-2">
                        Our Uni
                    </Link>
                    <nav className="">
                        <ul className="flex items-center gap-4">
                            <li>
                                <Link to="/program">Program</Link>
                            </li>
                            <li>
                                <Link to="/result-board">Result Board</Link>
                            </li>
                        </ul>
                    </nav>
                    
                    {isAuthenticated && user ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 bg-blue-500 px-4 py-2 text-white font-bold rounded hover:bg-blue-600 transition-colors"
                            >
                                <User size={16} />
                                <span>{user.name}</span>
                                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <div className="py-1">
                                        <Link
                                            to="/profile"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <User size={16} />
                                            Profile
                                        </Link>
                                        <Link
                                            to="/settings"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <Settings size={16} />
                                            Settings
                                        </Link>
                                        <hr className="my-1" />
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link className="bg-blue-500 px-4 py-2 !text-white font-bold" to="/login">Log in</Link>
                    )}
                </div>
            </header>
            
            {/* Close dropdown when clicking outside */}
            {isDropdownOpen && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDropdownOpen(false)}
                />
            )}
            
            <main>
                <div className="faculty-heading relative flex items-center justify-center">
                    <p className="faculty-heading-text absolute font-bold flex items-center justify-center w-fit h-fit bg-black text-white text-3xl text-center px-4 py-2">
                        Faculty of computer science
                    </p>
                    <img className="h-[300px] w-full object-cover object-center" src={facultyBg} alt="Faculty of Computer Science Background" />
                </div>
                {children}
            </main>
            {/* Add your footer here if needed */}
        </div>
    );
};

export default DefaultLayout;
