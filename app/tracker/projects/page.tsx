"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Folder, Clock } from "lucide-react";

const projectTypes = {
  PERSONAL: "ব্যক্তিগত",
  OFFICE: "অফিস",
  CLIENT: "ক্লায়েন্ট",
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "ওয়েবসাইট রিডিজাইন",
      description: "কোম্পানির ওয়েবসাইট আধুনিকীকরণ",
      type: "CLIENT",
      totalHours: 42.5,
      sessionCount: 12,
    },
    // Add more projects
  ]);

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">প্রকল্প ব্যবস্থাপনা</h1>
          <p className="text-gray-600">
            আপনার সব প্রকল্প দেখুন এবং ব্যবস্থাপনা করুন
          </p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          নতুন প্রকল্প
        </Button>
      </div>

      {/* সার্চ বার */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input placeholder="প্রকল্প খুঁজুন..." className="pl-10" />
      </div>

      {/* {showForm && (
        <ProjectForm
          onClose={() => setShowForm(false)}
          onSubmit={(data) => {
            // Handle project creation
            console.log(data);
            setShowForm(false);
          }}
        />
      )} */}

      {/* প্রকল্প গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Folder className="h-5 w-5 text-blue-500" />
                    {project.name}
                  </CardTitle>
                  <Badge className="mt-2">
                    {projectTypes[project.type as keyof typeof projectTypes]}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{project.description}</p>

              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>{project.totalHours} ঘণ্টা</span>
                </div>
                <div className="text-gray-500">
                  {project.sessionCount} টি সেশন
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  বিস্তারিত
                </Button>
                <Button size="sm" className="flex-1">
                  কাজ শুরু করুন
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
