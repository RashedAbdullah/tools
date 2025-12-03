"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, StopCircle, Plus } from "lucide-react";
import WorkSessionForm from "@/components/session-form";
import RecentSessions from "@/components/recent-sessions";
import { getMonthlyHours } from "@/actions/timetracker";

export default async function DashboardPage() {
  const currentDate = new Date();
  const stats = await getMonthlyHours(
    "user-id",
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  );

  return (
    <div className="space-y-6">
      {/* হেডার সেকশন */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ড্যাশবোর্ড</h1>
          <p className="text-gray-600">
            আজ: {new Date().toLocaleDateString("bn-BD")}
          </p>
        </div>
        <div className="flex gap-3">
          <Button>
            <Play className="mr-2 h-4 w-4" />
            নতুন সেশন শুরু
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            নতুন প্রকল্প
          </Button>
        </div>
      </div>

      {/* স্ট্যাটস কার্ড */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              মোট কাজের সময়
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.totalHours.toFixed(1)} ঘণ্টা
            </div>
            <p className="text-xs text-gray-500">এই মাসে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">সক্রিয় সেশন</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">১</div>
            <p className="text-xs text-gray-500">চলমান কাজ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">প্রকল্প</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৫</div>
            <p className="text-xs text-gray-500">মোট প্রকল্প</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">গড় দৈনিক</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">২.৫ ঘণ্টা</div>
            <p className="text-xs text-gray-500">প্রতিদিন</p>
          </CardContent>
        </Card>
      </div>

      {/* মেইন কন্টেন্ট */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>দ্রুত সেশন শুরু করুন</CardTitle>
            </CardHeader>
            <CardContent>
              <WorkSessionForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>সাম্প্রতিক কাজের সেশন</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentSessions />
            </CardContent>
          </Card>
        </div>

        <div>{/* <MonthlyStats /> */}</div>
      </div>
    </div>
  );
}
