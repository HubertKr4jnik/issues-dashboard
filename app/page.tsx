"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type issue = {
  id: number;
  apartment: string;
  category: string;
  desc: string;
  date: Date;
  priority: string;
  status: string;
};

export default function Home() {
  const [issues, setIssues] = useState<issue[]>([
    {
      id: 0,
      apartment: "Malaga Centro 01",
      category: "Plumbing",
      desc: "Bathroom sink is leaking",
      date: new Date("2026-09-15"),
      priority: "high",
      status: "pending",
    },
    {
      id: 1,
      apartment: "Malaga Centro Alameda",
      category: "Electrical",
      desc: "Outlet in the kitchen is sparking",
      date: new Date("2026-09-15"),
      priority: "high",
      status: "in progress",
    },
    {
      id: 2,
      apartment: "Malaga Centro 02",
      category: "Plumbing",
      desc: "No water in the kitchen sink",
      date: new Date("2026-09-15"),
      priority: "low",
      status: "resolved",
    },
  ]);
  const [isAddingIssue, setIsAddingIssue] = useState<boolean>(false);
  const [apartments, setApartments] = useState<string[]>([
    "Malaga Centro 01",
    "Malaga Centro Alameda",
    "Malaga Centro 02",
  ]);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col bg-white dark:bg-black">
        <h1 className="font-bold text-2xl">Issues:</h1>
        <div className="flex justify-center flex-wrap gap-10">
          {issues.length > 0 ? (
            issues.map((issue) => (
              <div
                key={issue.id}
                className="relative flex flex-col p-4 border border-slate-500 rounded"
              >
                <p
                  className={`px-2 w-fit text-black font-semibold border rounded ${issue.status === "pending" ? "bg-red-400 border-red-600" : issue.status === "in progress" ? "bg-sky-300 border-sky-500" : issue.status === "resolved" ? "bg-emerald-400 border-emerald-600" : null}`}
                >
                  {issue.status}
                </p>
                <p className="font-bold text-2xl py-2">{issue.apartment}</p>
                <p className="italic">{issue.desc}</p>
                <div className="flex pt-2 gap-2">
                  <span className="border px-2 py-1 rounded">
                    {issue.date.toLocaleDateString()}
                  </span>
                  <span className="border px-2 py-1 rounded">
                    {issue.category}
                  </span>
                  <span className="border px-2 py-1 rounded">
                    {issue.priority}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="font-semibold italic text-xl">
              No issues or none found with specified fileters
            </p>
          )}
        </div>
        {!isAddingIssue && (
          <input
            type="button"
            onClick={() => setIsAddingIssue(true)}
            value="Add issue"
            className="w-fit px-2 py-1 cursor-pointer border hover:font-semibold rounded transition-all"
          />
        )}
      </main>
    </div>
  );
}
