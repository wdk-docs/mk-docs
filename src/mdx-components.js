import React, { memo } from "react";
import { Checkbox, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
const DRAWER_WIDTH = 240;

// 该文件允许您提供在MDX文件中使用的自定义React组件。你可以导入和使用任何你想要的React组件，包括来自其他库的组件。
// 这个文件在`app`目录下使用MDX是必须得。
export function useMDXComponents(components) {
  return {
    // 允许自定义内置组件，例如添加样式。
    p: Typography,
    h1: (() => {
      const H1 = (props) => <Typography {...props} component="h1" variant="h1" />;
      return memo(H1);
    })(),
    h2: (() => {
      const H2 = (props) => <Typography {...props} component="h2" variant="h2" />;
      return memo(H2);
    })(),
    h3: (() => {
      const H3 = (props) => <Typography {...props} component="h3" variant="h3" />;
      return memo(H3);
    })(),
    h4: (() => {
      const H4 = (props) => <Typography {...props} component="h4" variant="h4" />;
      return memo(H4);
    })(),
    h5: (() => {
      const H5 = (props) => <Typography {...props} component="h5" variant="h5" />;
      return memo(H5);
    })(),
    h6: (() => {
      const H6 = (props) => <Typography {...props} component="h6" variant="h6" />;
      return memo(H6);
    })(),
    blockquote: (() => {
      const Blockquote = (props) => <Paper style={{ borderLeft: "4px solid grey", padding: 8 }} {...props} />;
      return memo(Blockquote);
    })(),
    nav: (() => {
      const Nav = (props) => (
        <Drawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
              top: ["48px", "56px", "64px"],
              height: "auto",
              bottom: 0,
              "padding-top": "20px",
            },
          }}
          variant="permanent"
          anchor="right"
          {...props}
        />
      );
      return memo(Nav);
    })(),
    ul: (() => {
      const Ul = (props) => <Typography {...props} component="ul" />;
      return memo(Ul);
    })(),
    ol: (() => {
      const Ol = (props) => <Typography {...props} component="ol" />;
      return memo(Ol);
    })(),
    li: (() => {
      const Li = (props) => <Typography {...props} component="li" />;
      return memo(Li);
    })(),
    table: (() => {
      const TableMdx = (props) => <Table {...props} />;
      return memo(TableMdx);
    })(),
    tr: (() => {
      const Tr = (props) => <TableRow {...props} />;
      return memo(Tr);
    })(),
    td: (() => {
      const Td = ({ align, ...props }) => <TableCell align={align || undefined} {...props} />;
      return memo(Td);
    })(),
    tbody: (() => {
      const TBody = (props) => <TableBody {...props} />;
      return memo(TBody);
    })(),
    th: (() => {
      const Th = ({ align, ...props }) => <TableCell align={align || undefined} {...props} />;
      return memo(Th);
    })(),
    thead: (() => {
      const THead = (props) => <TableHead {...props} />;
      return memo(THead);
    })(),
    // code: CodeBlock,
    hr: Divider,
    input: (() => {
      const Input = (props) => {
        const { type } = props;
        if (type === "checkbox") {
          return <Checkbox {...props} disabled={false} readOnly={true} />;
        }
        return <input {...props} />;
      };
      return memo(Input);
    })(),
    wrapper: (() => {
      const Wrapper = (props) => <div {...props} className="markdown-body" />;
      return memo(Wrapper);
    })(),
    Image,
    Check: (props) => <Checkbox {...props} disabled={false} readOnly={true} />,
    Cross: () => <></>,
    ...components,
  };
}
