"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { UploadIcon, FileText, DownloadIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const ImportQuestionModal = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target?.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      setData(jsonData);
      console.log(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const removeFirstColumn = (rows: any[]) => {
    return rows.map((row) => {
      const entries = Object.entries(row);
      const [, ...rest] = entries;
      return Object.fromEntries(rest);
    });
  };

  const handleUploadFile = async () => {
    try {
      setLoading(true);
      const cleanedData = removeFirstColumn(data);
      const jsonString = JSON.stringify(cleanedData, null, 2);

      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "questions.json";
      a.click();
      URL.revokeObjectURL(url);

      toast.success("JSON ফাইল ডাউনলোড হয়েছে।");
      setData([]);
      setFileName("");
    } catch (error) {
      console.log(error);
      toast.error("ডাউনলোড করতে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
          <FileText className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          এক্সেল থেকে JSON কনভার্ট করুন
        </h1>
        <p className="text-gray-600">
          এক্সেল ফাইল আপলোড করুন এবং JSON ফাইল ডাউনলোড করুন
        </p>
      </div>

      {/* Upload Area */}
      <div className="mb-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="excel"
            role="button"
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/50 cursor-pointer group"
          >
            <input
              id="excel"
              onChange={handleFileUpload}
              accept=".xlsx, .xls"
              className="sr-only"
              aria-label="Upload file"
              type="file"
            />

            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 flex size-16 shrink-0 items-center justify-center rounded-full border bg-white group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                {fileName ? (
                  <CheckCircle2 className="size-6 text-green-600" />
                ) : (
                  <UploadIcon className="size-6 text-gray-400 group-hover:text-blue-600" />
                )}
              </div>

              {fileName ? (
                <>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    ফাইল সফলভাবে আপলোড হয়েছে
                  </p>
                  <p className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                    {fileName}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    ফাইল আপলোড করুন
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    ক্লিক করে ব্রাউজ করুন বা ফাইল ড্রপ করুন
                  </p>
                  <p className="text-xs text-gray-400">
                    শুধুমাত্র .xlsx এবং .xls ফাইল সাপোর্টেড
                  </p>
                </>
              )}
            </div>
          </label>
        </div>
      </div>

      {/* Stats & Download Button */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{data.length}</div>
            <div className="text-sm text-gray-600">মোট</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {data.length > 0 ? "প্রস্তুত" : "অপেক্ষমান"}
            </div>
            <div className="text-sm text-gray-600">স্ট্যাটাস</div>
          </div>
        </div>

        <Button
          onClick={handleUploadFile}
          disabled={data.length === 0 || loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ডাউনলোড হচ্ছে...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <DownloadIcon className="w-4 h-4" />
              JSON ডাউনলোড করুন
            </div>
          )}
        </Button>
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-xs text-gray-500">
          প্রথম কলাম স্বয়ংক্রিয়ভাবে সরানো হবে এবং JSON ফর্ম্যাটে কনভার্ট হবে
        </p>
      </div>
    </div>
  );
};

export default ImportQuestionModal;