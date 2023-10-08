import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
// import Link from 'next/link'

import "./global.css";

export const metadata = {
  title: "dao-ai 人工智能学习",
  description: "研究学习人工智能",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <DashboardIcon sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }} />
              <Typography variant="h6" noWrap component="div" color="black">
                道智
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
