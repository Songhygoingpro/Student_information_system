import React from "react";
import { useUser } from "@/contexts/UserContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, Navigate } from "react-router-dom";

type AdminStudent = {
  id: number;
  name: string;
  class: string;
  shift?: string;
  avatar?: string;
};

const MOCK_STUDENTS: AdminStudent[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: "John Alex",
  class: "R3-16",
  shift: "Year I, Night",
  avatar: "https://i.pravatar.cc/80?img=" + ((i % 70) + 1),
}));

export default function AdminIndex() {
  const { user, isAuthenticated } = useUser();
  const [q, setQ] = React.useState("");
  const [students] = React.useState<AdminStudent[]>(MOCK_STUDENTS);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user?.role !== "admin") {
    // Non-admins should not access this page
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Forbidden</h2>
        <p className="text-sm text-muted-foreground">You do not have permission to view this page.</p>
      </div>
    );
  }

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.class.toLowerCase().includes(q.toLowerCase()) ||
      (s.shift ?? "").toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Header bar similar to the mockup */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tight">
          <span className="inline-block -rotate-3 bg-blue-700 text-white px-3 py-1 rounded-sm shadow">
            Our Uni
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search student"
              className="w-64 pl-3 pr-8"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      {/* Body grid with left nav and content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4">
        {/* Left nav (faculty / sections) */}
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

        {/* Right content: cards */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((s) => (
              <Card key={s.id} className="p-3">
                <div className="flex items-start gap-3">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="h-14 w-14 rounded-full object-cover border"
                  />
                  <div>
                    <div className="font-semibold leading-5">{s.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {s.class} ({s.shift})
                    </div>
                    <Link to="#" className="text-xs text-blue-600 hover:underline">
                      View profile
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-sm text-muted-foreground mt-6">No students found.</div>
          )}
        </section>
      </div>
    </div>
  );
}
