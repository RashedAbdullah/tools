"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, StopCircle, Edit, Trash2 } from "lucide-react";

export default function RecentSessions() {
  const [sessions, setSessions] = useState([
    {
      id: "1",
      startTime: new Date("2024-01-15T09:00:00"),
      endTime: new Date("2024-01-15T12:30:00"),
      project: "ওয়েবসাইট ডেভেলপমেন্ট",
      workspace: "অফিস",
      duration: "৩.৫ ঘণ্টা",
      notes: "হোমপেজ কম্প্লিট",
    },
    // Add more dummy data
  ]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("bn-BD", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>সময়</TableHead>
            <TableHead>প্রকল্প</TableHead>
            <TableHead>স্থান</TableHead>
            <TableHead>স্থিতিকাল</TableHead>
            <TableHead>নোট</TableHead>
            <TableHead>কার্যক্রম</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell>
                <div className="text-sm">
                  {formatTime(session.startTime)} -{" "}
                  {formatTime(session.endTime!)}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{session.project}</Badge>
              </TableCell>
              <TableCell>{session.workspace}</TableCell>
              <TableCell className="font-medium">{session.duration}</TableCell>
              <TableCell className="max-w-xs truncate">
                {session.notes}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
