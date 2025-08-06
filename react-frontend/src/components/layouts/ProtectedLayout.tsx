import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { User as UserIcon, ChevronDown, Shield, LogOut, Settings } from "lucide-react";

/**
 * ProtectedLayout rewritten to resemble the provided mockup:
 * - Left: faculty/section vertical menu
 * - Top bar: Our Uni logo (ribbon style), centered nav removed; right: profile dropdown
 * - Body: light gray content bg; search input and slot for page content
 * - Admin Panel link appears in profile dropdown only when user.role === 'admin'
 */
export default function ProtectedLayout() {
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Do not force redirect here so landing "/" can be public if desired.
    // Auth-only pages should be wrapped by RequireAuth in router.
  }, []);

  const onLogout = async () => {
    try {
      await logout();
    } finally {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      {/* Top bar */}
      <header className="w-full bg-white border-b">
        <div className="mx-auto max-w-7xl h-14 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            <span className="inline-block -rotate-3 bg-blue-700 text-white px-3 py-1 rounded-sm shadow">
              Our Uni
            </span>
          </Link>

          {/* Right: Profile dropdown */}
          <div className="relative">
            {isAuthenticated && user ? (
              <>
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-black"
                >
                  <UserIcon size={16} />
                  <span className="font-medium">{user.name}</span>
                  <ChevronDown size={16} />
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {/* Admin Panel for admins only */}
                      {user.role === "admin" && (
                        <button
                          onClick={() => {
                            setOpen(false);
                            navigate("/admin");
                          }}
                          className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <Shield size={16} />
                          Admin Panel
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setOpen(false);
                          navigate("/profile");
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <UserIcon size={16} />
                        Profile
                      </button>

                      <button
                        onClick={() => {
                          setOpen(false);
                          navigate("/settings");
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <Settings size={16} />
                        Settings
                      </button>

                      <hr className="my-1" />

                      <button
                        onClick={onLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main area */}
      <div className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4">
        {/* Left sidebar (faculty / sections) */}
        <aside>
          <Card className="p-4">
            <div className="font-semibold">Faculty of</div>
            <div className="font-semibold -mt-1">Computer science</div>

            <nav className="mt-4 space-y-2">
              <Link to="#" className="block text-sm text-gray-700 hover:underline">
                Student
              </Link>
              <Link to="#" className="block text-sm font-semibold hover:underline">
                Blog
              </Link>
              <Link to="#" className="block text-sm hover:underline">
                Result board
              </Link>
              <Link to="#" className="block text-sm hover:underline">
                Classes
              </Link>
            </nav>
          </Card>
        </aside>

        {/* Right content area */}
        <section>

          {/* Slot for pages (Home, Program, Admin, etc.) */}
          <div className="bg-transparent">
            <Outlet />
          </div>
        </section>
      </div>

      {/* Click-away to close dropdown */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
