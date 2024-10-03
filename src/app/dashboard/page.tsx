"use client";
import React, { useState } from "react";
import { SearchDashboard } from "./_components/search-dashboard";
import { TemplateList } from "./_components/template-list";

const Dashboard = () => {
  const [searchInput, setsearchInput] = useState<string>();
  return (
    <div>
      <SearchDashboard onSearchInput={setsearchInput} />
      <TemplateList searchInput={searchInput as string}/>
    </div>
  );
};

export default Dashboard;
