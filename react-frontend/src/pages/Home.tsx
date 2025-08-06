import { useState, useEffect } from 'react'
import { Button } from "@/components/Shadcn/button"
import DefaultLayout from "@/components/layouts/DefaultLayout"
import axios from "axios"
import '../App.css'

interface ApiResponse {
  message: string;
  status: string;
  timestamp: string;
}

function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get<ApiResponse>('http://localhost:8000/api/test');
      setData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className=" bg-gray-50 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Laravel + React Test
          </h1>
          
          <div className="space-y-4">
            <Button 
              onClick={fetchData} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Loading...' : 'Test API Connection'}
            </Button>
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700 font-medium">Error:</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            
            {data && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700 font-medium">✅ Connection Successful!</p>
                <div className="mt-2 text-sm text-gray-600">
                  <p><strong>Message:</strong> {data.message}</p>
                  <p><strong>Status:</strong> {data.status}</p>
                  <p><strong>Timestamp:</strong> {data.timestamp}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Frontend: React + Vite + shadcn/ui</p>
            <p>Backend: Laravel API</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Home
