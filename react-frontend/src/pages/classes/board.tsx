import React from "react";
import { useParams } from "react-router-dom";
import api from "@/lib/api";
import { Card } from "@/components/ui/card";

type Course = {
  id: number;
  room: string;
  section: string;
  year: number;
  description?: string | null;
};

type ResultRow = {
  id: number;
  class_id: number;
  student_id: number;
  semester: number;
  english: number;
  graphic_design: number;
  network: number;
  java: number;
  php: number;
  total: number;
  status: "Pass" | "Fail";
  student?: {
    id: number;
    name: string;
    email: string;
  };
};

type Paginated<T> = {
  data: T[];
  current_page: number;
  last_page: number;
  total: number;
};

export default function ResultBoard() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState<string | null>(null);
  const [course, setCourse] = React.useState<Course | null>(null);
  const [semester] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [results, setResults] = React.useState<Paginated<ResultRow>>({
    data: [],
    current_page: 1,
    last_page: 1,
    total: 0,
  });

  const classId = Number(id);

  const fetchCourse = React.useCallback(async () => {
    try {
      const res = await api.get(`/api/classes/${classId}`);
      setCourse(res.data.data);
    } catch (e: any) {
      setErr(e?.response?.data?.message || "Failed to load class");
    }
  }, [classId]);

  const fetchResults = React.useCallback(async (p = 1) => {
    setLoading(true);
    setErr(null);
    try {
      const res = await api.get(`/api/results?class_id=${classId}&semester=${semester}&page=${p}`);
      setResults(res.data.data);
    } catch (e: any) {
      setErr(e?.response?.data?.message || "Failed to load results");
    } finally {
      setLoading(false);
    }
  }, [classId, semester]);

  React.useEffect(() => {
    if (!Number.isFinite(classId)) return;
    fetchCourse();
    fetchResults(page);
  }, [classId, fetchCourse, fetchResults, page]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold">
          Result board’s Class {course?.room} Year {course?.year}
        </h1>
        <div className="text-sm text-gray-600 mt-1">Year {course?.year} semester {semester}</div>
      </div>

      {err && <div className="text-sm text-red-600">{err}</div>}

      <Card className="p-0 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left text-sm font-semibold px-4 py-3">Student ID</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Name</th>
              <th className="text-left text-sm font-semibold px-4 py-3">English</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Graphic Design</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Network</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Java</th>
              <th className="text-left text-sm font-semibold px-4 py-3">PHP</th>
              <th className="text-left text-sm font-semibold px-4 py-3">Result</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-3 text-sm" colSpan={8}>Loading...</td>
              </tr>
            ) : results.data.length === 0 ? (
              <tr>
                <td className="px-4 py-3 text-sm" colSpan={8}>No results found.</td>
              </tr>
            ) : (
              results.data.map((r) => (
                <tr key={r.id} className="border-b">
                  <td className="px-4 py-3 text-sm">{r.student_id}</td>
                  <td className="px-4 py-3 text-sm">{r.student?.name ?? "-"}</td>
                  <td className="px-4 py-3 text-sm">{r.english}</td>
                  <td className="px-4 py-3 text-sm">{r.graphic_design}</td>
                  <td className="px-4 py-3 text-sm">{r.network}</td>
                  <td className="px-4 py-3 text-sm">{r.java}</td>
                  <td className="px-4 py-3 text-sm">{r.php}</td>
                  <td className="px-4 py-3 text-sm">{r.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
