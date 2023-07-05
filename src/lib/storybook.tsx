import { type DecoratorFunction } from "@storybook/types";
import { type ReactNode } from "react";

interface IStorybookBlock {
  theme: string;
  children: ReactNode;
}

const StorybookBlock: React.FC<IStorybookBlock> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: props.theme === "light" ? "#ffffff" : "#161A1D",
        display: "flex",
        padding: "2rem 0",
        justifyContent: "center",
      }}
      className={props.theme}
    >
      {children}
    </div>
  );
};

export const withColorScheme: DecoratorFunction<any> = (Story, context) => {
  const { scheme } = context.globals;

  if (scheme === "light") {
    return (
      <StorybookBlock theme="light">{Story() as ReactNode}</StorybookBlock>
    );
  }

  if (scheme === "dark") {
    return <StorybookBlock theme="dark">{Story() as ReactNode}</StorybookBlock>;
  }

  return (
    <div>
      <StorybookBlock theme="light">{Story() as ReactNode}</StorybookBlock>
      <StorybookBlock theme="dark">{Story() as ReactNode}</StorybookBlock>
    </div>
  );
};
