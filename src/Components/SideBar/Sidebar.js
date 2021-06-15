import React, { memo } from "react";
import SidebarContent from "./SidebarContent";

const Data = [
  {
    heading: "Professional Books",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "NISM/IIBF",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "Journals",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "Tax Compliance on DVD",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "Taxmann online on DVD",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "Taxmann online on Web",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "E-Services",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "E-Journals",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: "E-Books",
    list: [
      "Direct Tax Laws",
      "International Taxation",
      "Indirect Tax Laws",
      "Insolvency and Bankruptcy Code",
      "GST",
      "Accounts and Audit",
      "Banking & Insurance",
      "Bare Acts",
    ],
  },
  {
    heading: " Advanced diploma in international taxation",
    list: ["Quick Links", "Bookmann India", "Authors"],
  },
  {
    heading: "Catalogue",
    list: ["Dealers"],
  },
];
const Sidebar = memo(() => {
  return (
    <div>
      <div className="m-2">Bookstore Home</div>
      {Data.map((item) => {
        return <SidebarContent heading={item.heading} list={item.list} />;
      })}
    </div>
  );
});

export default Sidebar;
