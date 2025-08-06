import React from "react";
import { useUser } from "@/contexts/UserContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading, updateProfile, clearError, error } = useUser();
  const [name, setName] = React.useState(user?.name ?? "");
  const [email, setEmail] = React.useState(user?.email ?? "");
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
  }, [user]);

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  const onSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    clearError();

    try {
      await updateProfile({
        name,
        email,
        ...(currentPassword
          ? { current_password: currentPassword, new_password: newPassword, new_password_confirmation: confirmPassword }
          : {}),
      } as any);
      setMessage("Profile updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (e) {
      // updateProfile already dispatches error to context
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold">My Profile</h1>

      <Card className="p-4 space-y-4">
        <form onSubmit={onSaveProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div className="pt-2">
            <div className="text-sm font-semibold mb-2">Change Password (optional)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">Current password</label>
                <Input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">New password</label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Confirm new password</label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}
          {message && <div className="text-sm text-green-600">{message}</div>}

          <div className="flex justify-end">
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </Card>

      <Card className="p-4">
        <div className="text-sm text-gray-600">
          <div><span className="font-medium">User ID:</span> {user?.id}</div>
          <div><span className="font-medium">Role:</span> {user?.role ?? "user"}</div>
          <div><span className="font-medium">Created at:</span> {user?.created_at}</div>
        </div>
      </Card>
    </div>
  );
}
