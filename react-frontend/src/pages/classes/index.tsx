import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "@/lib/api";
import { useUser } from "@/contexts/UserContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Course = {
  id: number;
  room: string;
  section: string;
  year: number;
  description?: string | null;
};

type Paginated<T> = {
  data: T[];
  current_page: number;
  last_page: number;
  total: number;
};

export default function ClassesList() {
  const { isAuthenticated, user } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [classes, setClasses] = React.useState<Paginated<Course>>({
    data: [],
    current_page: 1,
    last_page: 1,
    total: 0,
  });

  const fetchClasses = React.useCallback(async (p = 1) => {
    setLoading(true);
    setErr(null);
    try {
      const res = await api.get(`/api/classes?page=${p}`);
      setClasses(res.data.data);
    } catch (e: any) {
      setErr(e?.response?.data?.message || "Failed to load classes");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchClasses(page);
  }, [fetchClasses, page]);

  const isAdmin = user?.role === "admin";

  const onDelete = async (id: number) => {
    if (!isAdmin) return;
    if (!confirm("Delete this class?")) return;
    try {
      await api.delete(`/api/classes/${id}`, { withCredentials: true });
      fetchClasses(page);
    } catch (e: any) {
      alert(e?.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Classes</h1>
      {err && <div className="text-sm text-red-600">{err}</div>}

      <Card className="p-0 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left text-sm font-semibold px-4 py-3">Room</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Section</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Year</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-3 text-sm" colSpan={4}>Loading...</td>
              </tr>
            ) : classes.data.length === 0 ? (
              <tr>
                <td className="px-4 py-3 text-sm" colSpan={4}>No classes found.</td>
              </tr>
            ) : (
              classes.data.map((c) => (
                <tr key={c.id} className="border-b">
                  <td className="px-4 py-3 text-sm">{c.room}</td>
                  <td className="px-4 py-3 text-sm">{c.section}</td>
                  <td className="px-4 py-3 text-sm">{c.year}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-3">
                      {isAdmin && (
                        <>
                          <button className="text-red-600 hover:underline" onClick={() => onDelete(c.id)}>
                            Delete
                          </button>
                          <button
                            className="text-yellow-600 hover:underline"
                            onClick={() => navigate(`/classes/${c.id}/edit`)}
                          >
                            Edit
                          </button>
                        </>
                      )}
                      <Link className="text-blue-600 hover:underline" to={`/classes/${c.id}/board`}>
                        View board
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Page {classes.current_page} of {classes.last_page} — {classes.total} total
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Prev
          </Button>
          <Button
            variant="outline"
            disabled={page >= classes.last_page}
            onClick={() => setPage((p) => Math.min(classes.last_page, p + 1))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
