"use client";
import { useEffect, useState } from "react";
import IssueCard from "./issueCard";

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
  const [statusOptions, setStatusOptions] = useState<string[]>([
    "pending",
    "in progress",
    "resolved",
  ]);
  const [apartmentToAdd, setApartmentToAdd] = useState(apartments[0]);
  const [categoryToAdd, setCategoryToAdd] = useState(categories[0]);
  const [descToAdd, setDescToAdd] = useState("");
  const [dateToAdd, setDateToAdd] = useState<Date | undefined>();
  const [priorityToAdd, setPriorityToAdd] = useState(priorities[0]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [issueFormError, setIssueFormError] = useState<string>("");

  const pendingIssuesAmount = issues.filter(
    (issue) => issue.status === "pending",
  ).length;
  const inProgressIssuesAmount = issues.filter(
    (issue) => issue.status === "in progress",
  ).length;
  const ResolvedIssuesAmount = issues.filter(
    (issue) => issue.status === "resolved",
  ).length;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="fixed flex gap-2 p-3 w-full top-0 border-b border-slate-500 bg-white dark:bg-black">
        <p className="flex place-items-center gap-2 px-2 w-fit text-black font-semibold border rounded bg-slate-400 border-slate-600">
          All issues: {issues.length}
        </p>
        <p className="flex place-items-center gap-2 px-2 w-fit text-black font-semibold border rounded bg-red-400 border-red-600">
          Pending: {pendingIssuesAmount}
        </p>
        <p className="flex place-items-center gap-2 px-2 w-fit text-black font-semibold border rounded bg-sky-300 border-sky-500">
          In progress: {inProgressIssuesAmount}
        </p>
        <p className="flex place-items-center gap-2 px-2 w-fit text-black font-semibold border rounded bg-emerald-400 border-emerald-600">
          Resolved: {ResolvedIssuesAmount}
        </p>
      </div>
      <main className="flex flex-col place-items-center gap-6 bg-white dark:bg-black">
        {isOverlayVisible && (
          <div className="absolute top-0 left-0 w-full h-screen z-1 bg-[rgba(0,0,0,.5)]"></div>
        )}

        <h1 className="font-bold text-2xl text-center">Issues:</h1>
        <div className="flex justify-center flex-wrap gap-10">
          {issues.length > 0 ? (
            issues.map((issue) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                issues={issues}
                setIssues={setIssues}
                statusOptions={statusOptions}
              />
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
            <input
              type="button"
              value="X"
              className="absolute top-2 left-4 font-semibold cursor-pointer"
              onClick={() => {
                setIsAddingIssue(false);
                setIsOverlayVisible(false);
              }}
            />
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
                className="border-b dark:[color-scheme:dark]"
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
            <p className="text-amber-500 underline">{issueFormError}</p>
            <input
              type="button"
              value="Add"
              onClick={() => {
                if (
                  apartmentToAdd === "" ||
                  categoryToAdd === "" ||
                  dateToAdd === null ||
                  dateToAdd === undefined ||
                  priorityToAdd === "" ||
                  descToAdd === ""
                ) {
                  setIssueFormError("Please fill out all of the input fields");
                  return;
                }
                setIsOverlayVisible(false);
                setIsAddingIssue(false);
                setIssues([
                  ...issues,
                  {
                    id: apartments.length,
                    apartment: apartmentToAdd,
                    category: categoryToAdd,
                    desc: descToAdd,
                    date: dateToAdd!,
                    priority: priorityToAdd,
                    status: "pending",
                  },
                ]);
                setApartmentToAdd(apartments[0]);
                setCategoryToAdd(categories[0]);
                setDateToAdd(undefined);
                setPriorityToAdd(priorities[0]);
                setDescToAdd("");
              }}
              className="w-fit px-4 py-1 cursor-pointer border hover:font-semibold rounded transition-all"
            />
          </div>
        )}
      </main>
    </div>
  );
}
