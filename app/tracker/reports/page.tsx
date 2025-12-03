"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { BarChart3, Download, Filter } from "lucide-react";

export default function ReportsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [reportType, setReportType] = useState("monthly");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">রিপোর্ট এবং বিশ্লেষণ</h1>
          <p className="text-gray-600">
            আপনার কাজের পারফরম্যান্স বিশ্লেষণ করুন
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          রিপোর্ট ডাউনলোড
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>কাজের সময়ের রিপোর্ট</CardTitle>
              <div className="flex items-center gap-3">
                <Select value={reportType} onValueChange={setReportType}>
                  <option value="daily">দৈনিক</option>
                  <option value="weekly">সাপ্তাহিক</option>
                  <option value="monthly">মাসিক</option>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border rounded-lg">
              <BarChart3 className="h-16 w-16 text-gray-300" />
              <p className="text-gray-500 ml-4">চার্ট ডাটা এখানে দেখানো হবে</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>তারিখ নির্বাচন</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>

      {/* সারাংশ কার্ড */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">৪২.৫</div>
              <p className="text-gray-600">মোট কাজের সময় (ঘণ্টা)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">২.৮</div>
              <p className="text-gray-600">গড় দৈনিক (ঘণ্টা)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">১৮</div>
              <p className="text-gray-600">মোট সেশন</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
