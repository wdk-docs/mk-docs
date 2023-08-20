import Image from "next/image";
// 该文件允许您提供在MDX文件中使用的自定义React组件。你可以导入和使用任何你想要的React组件，包括来自其他库的组件。
// 这个文件需要在`app`目录下使用MDX。
export function useMDXComponents(components) {
  return {
    // 允许自定义内置组件，例如添加样式。
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    Image,
    ...components,
  };
}
