"use client"; // Required for Apollo in App Router

import "./globals.css";

import MajorsList from "@/components/MajorsList";
import UsersList from "@/components/UsersList";
import MajorTypesList from "@/components/MajorTypesList"
import MajorVersionsList from "@/components/MajorVersionsList"
import MajorRequirementsList from "@/components/MajorRequirementsList";
import MajorSubRequirementsList from "@/components/MajorSubRequirementsList";
import StudentMajorsList from "@/components/StudentMajorsList";

export default function Home() {
  return (
    <main className="p-6">
      <UsersList />
      <MajorsList />
      <MajorTypesList />
      <MajorVersionsList />
      <MajorRequirementsList />
      <MajorSubRequirementsList />
      <StudentMajorsList />
    </main>
  );
}
