import React from "react";
import { Tabs, Tab } from "@mui/material";

const CustomTabs = ({ value, onChange, tabs }) => {
  return (
    <Tabs
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      sx={{
        "& .MuiTab-root": {
          color: "#aaa",
          fontWeight: 500,
        },
        "& .Mui-selected": {
          color: "#34c94b",
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "#34c94b",
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} />
      ))}
    </Tabs>
  );
};

export default CustomTabs;