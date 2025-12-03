"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProjectType, WorkspaceType } from "@/app/generated/prisma/enums";
import { startWorkSession } from "@/actions/timetracker";

export default function WorkSessionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectId: "",
    workspace: WorkspaceType.OFFICE,
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await startWorkSession({
        userId: "current-user-id", // Get from auth
        ...formData,
      });
      // Success handling
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="project">প্রকল্প নির্বাচন করুন</Label>
        <Select
          value={formData.projectId}
          onValueChange={(value) =>
            setFormData({ ...formData, projectId: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="প্রকল্প বাছাই করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">ব্যক্তিগত প্রকল্প</SelectItem>
            <SelectItem value="office">অফিসের কাজ</SelectItem>
            <SelectItem value="client">ক্লায়েন্টের কাজ</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="workspace">কাজের স্থান</Label>
        <Select
          value={formData.workspace}
          onValueChange={(value: WorkspaceType) =>
            setFormData({ ...formData, workspace: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="কাজের স্থান নির্বাচন করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={WorkspaceType.OFFICE}>অফিস</SelectItem>
            <SelectItem value={WorkspaceType.HOME_OFFICE}>হোম অফিস</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">নোট</Label>
        <Textarea
          id="notes"
          placeholder="আজকের কাজ সম্পর্কে নোট লিখুন..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "শুরু হচ্ছে..." : "কাজ শুরু করুন"}
      </Button>
    </form>
  );
}
