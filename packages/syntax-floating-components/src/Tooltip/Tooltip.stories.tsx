import { useState, useRef, useEffect } from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Typography } from "@cambly/syntax-core";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";
import image from "../../../../apps/storybook/assets/images/info-icon.svg";

export default {
  title: "Floating-Components/Tooltip",
  component: Tooltip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p7LKna9JMU0JEkcKamzs53/%F0%9F%93%90-Syntax?node-id=1007-4109&t=1jAyqXTkYBP57oZL-0",
    },
  },
  argTypes: {
    initialOpen: {
      control: { type: "radio" },
      defaultValue: true,
      options: [false, true],
    },
    open: {
      table: { disable: true },
      description:
        "Value of the 'open' state when controlled (disabled for story)",
    },
    onOpenChange: {
      table: { disable: true },
      description:
        "Function to change the value of 'open' when tooltip is interacted (diabled for story)",
    },
    placement: {
      control: { type: "select" },
      defaultValue: "right",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
      table: {
        defaultValue: { summary: "right" },
      },
    },
    strategy: {
      control: { type: "select" },
      options: ["absolute", "fixed"],
      defaultValue: "absolute",
      table: {
        defaultValue: { summary: "absolute" },
      },
    },
    children: {
      control: { type: "text" },
      description: "The string value to show on the tooltip content",
      defaultValue: "This is a button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "This is a button" },
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Tooltip>;

export const Default: StoryObj<typeof Tooltip> = {
  args: {
    delay: 0,
    placement: "right",
    initialOpen: true,
    strategy: "absolute",
    children: "This is a book",
  },
  render: ({ delay, placement, initialOpen, strategy, children }) => (
    <Tooltip
      delay={delay}
      placement={placement}
      initialOpen={initialOpen}
      strategy={strategy}
    >
      <TooltipTrigger>
        <img
          src={image as string}
          alt="info icon"
          style={{ width: "20px", height: "20px" }}
        />
      </TooltipTrigger>
      <TooltipContent>
        <Typography size={100} color="white">
          {children}
        </Typography>
      </TooltipContent>
    </Tooltip>
  ),
};

export const ControlledTooltip = () => {
  const [open, setOpen] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop =
        scrollableRef.current.scrollHeight / 2 -
        scrollableRef.current.offsetHeight / 2;
    }
  }, [scrollableRef]);

  return (
    <div
      ref={scrollableRef}
      style={{
        overflowY: "auto",
        width: "400px",
        height: "300px",
      }}
    >
      <div
        style={{
          marginTop: "300px",
          marginBottom: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger>
            <button onClick={() => setOpen((v) => !v)}>My Trigger</button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography size={100} color="white">
              This is a book and a really long sentence.
            </Typography>
            <a
              href="http://localhost:6006/?path=/docs/floating-components-tooltip--docs"
              style={{
                textUnderlinePosition: "under",
                color: "white",
                paddingTop: "8px",
              }}
            >
              Learn more
            </a>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
