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
  const [priorities, setPriorities] = useState<string[]>([
    "low",
    "medium",
    "high",
  ]);
  const [categories, setCategories] = useState<string[]>([
    "plumbing",
    "electricity",
    "cleaning",
    "furniture",
    "internet",
  ]);
  const [apartmentToAdd, setApartmentToAdd] = useState("");
  const [categoryToAdd, setCategoryToAdd] = useState("");
  const [descToAdd, setDescToAdd] = useState("");
  const [dateToAdd, setDateToAdd] = useState(new Date());
  const [priorityToAdd, setPriorityToAdd] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col bg-white dark:bg-black">
        {isOverlayVisible && (
          <div className="absolute top-0 left-0 w-full h-screen z-1 bg-[rgba(0,0,0,.5)]"></div>
        )}

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
            onClick={() => {
              setIsAddingIssue(true);
              setIsOverlayVisible(true);
            }}
            value="Add issue"
            className="w-fit px-2 py-1 cursor-pointer border hover:font-semibold rounded transition-all"
          />
        )}
        {isAddingIssue && (
          <div className="absolute flex flex-col place-items-center z-3 p-6 gap-4 w-4/5 md:w-2/3 lg:w-1/3 h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black border-2 border-slate-500 rounded">
            <h2 className="font-semibold text-xl">Add new issue:</h2>
            <div className="flex gap-2">
              <span>Apartment: </span>
              <select
                onChange={(e) => setApartmentToAdd(e.target.value)}
                className="border-b"
              >
                {apartments.map((apartment, index) => (
                  <option key={index} value={apartment} className="text-black">
                    {apartment}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <span>Caegory: </span>
              <select
                onChange={(e) => setCategoryToAdd(e.target.value)}
                className="border-b"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category} className="text-black">
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <span>Priority: </span>
              <select
                onChange={(e) => setPriorityToAdd(e.target.value)}
                className="border-b"
              >
                {priorities.map((priority, index) => (
                  <option key={index} value={priority} className="text-black">
                    {priority}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <span>Date: </span>
              <input
                type="date"
                onChange={(e) => setDateToAdd(new Date(e.target.value))}
                className="border-b"
              />
            </div>
            <div className="flex gap-2">
              <span>Description: </span>
              <textarea
                value={descToAdd}
                onChange={(e) => setDescToAdd(e.target.value)}
                className="border rounded p-1"
              ></textarea>
            </div>
            <input
              type="button"
              value="Add"
              onClick={() => {
                setIsOverlayVisible(false);
                setIsAddingIssue(false);
                setIssues([
                  ...issues,
                  {
                    id: apartments.length,
                    apartment: apartmentToAdd,
                    category: categoryToAdd,
                    desc: descToAdd,
                    date: dateToAdd,
                    priority: priorityToAdd,
                    status: "pending",
                  },
                ]);
              }}
              className="w-fit px-4 py-1 cursor-pointer border hover:font-semibold rounded transition-all"
            />
          </div>
        )}
      </main>
    </div>
  );
}
