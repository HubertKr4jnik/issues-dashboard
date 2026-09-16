"use client";

import Image from "next/image";
import { useState } from "react";

type IssueCardProps = {
  issues: issue[];
  setIssues: React.Dispatch<React.SetStateAction<issue[]>>;
  issue: issue;
  statusOptions: string[];
};

export default function IssueCard({
  issues,
  setIssues,
  issue,
  statusOptions,
}: IssueCardProps) {
  const [isEditingIssueStatus, setIsEditingIssueStatus] =
    useState<boolean>(false);

  return (
    <div className="relative flex flex-col p-4 border border-slate-500 rounded">
      <div
        className={`flex place-items-center gap-2 px-2 w-fit text-black font-semibold border rounded ${issue.status === "pending" ? "bg-red-400 border-red-600" : issue.status === "in progress" ? "bg-sky-300 border-sky-500" : issue.status === "resolved" ? "bg-emerald-400 border-emerald-600" : null}`}
      >
        {isEditingIssueStatus ? (
          <select
            value={issue.status}
            onChange={(e) => {
              setIsEditingIssueStatus(false);
              const updatedIssues = [...issues];
              setIssues(
                updatedIssues.map((updatedIssue) =>
                  updatedIssue.id === issue.id
                    ? { ...updatedIssue, status: e.target.value }
                    : updatedIssue,
                ),
              );
            }}
            className="w-fit"
          >
            {statusOptions.map((statusOption, index) => (
              <option key={index} value={statusOption}>
                {statusOption}
              </option>
            ))}
          </select>
        ) : (
          <p>{issue.status}</p>
        )}
        <div className="relative h-4 aspect-square">
          <Image
            src="/pen-edit.png"
            alt="Edit icon"
            fill={true}
            onClick={() => setIsEditingIssueStatus(true)}
          />
        </div>
      </div>
      <p className="font-bold text-2xl py-2">{issue.apartment}</p>
      <p className="italic">{issue.desc}</p>
      <div className="flex pt-2 gap-2">
        <span className="border px-2 py-1 rounded">
          {new Date(issue.date).toLocaleDateString()}
        </span>
        <span className="border px-2 py-1 rounded">{issue.category}</span>
        <span className="border px-2 py-1 rounded">{issue.priority}</span>
      </div>
    </div>
  );
}
