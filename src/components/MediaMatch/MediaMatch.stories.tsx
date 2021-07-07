import { Story, Meta } from "@storybook/react/types-6-0";
import MediaMatch, { MediaMatchProps } from ".";

export default {
  title: "Components/MediaMatch",
  component: MediaMatch,
  argTypes: {
    lessThan: {
      description: "Breakpoints media query max-width",
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "breakpoint",
          detail: `{
            xhuge: "1920px",
            huge: "1440px",
            large: "1170px",
            medium: "769px",
            small: "450px",
            xsmall: "350px",
          }`,
        },
      },
    },
    greaterThan: {
      description: "Breakpoints media query min-width",
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "breakpoint",
          detail: `{
            xhuge: "1920px",
            huge: "1440px",
            large: "1170px",
            medium: "769px",
            small: "450px",
            xsmall: "350px",
          }`,
        },
      },
    },
    ref: {
      description: "Ref element",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "ref",
          detail:
            "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null",
        },
      },
    },
    theme: {
      description: "Styled-component theme",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "defaultTheme",
        },
      },
    },
    as: {
      description: "Polymorphism styled-components",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "React.ElementType",
        },
      },
    },
    forwardedAs: {
      description: "Polymorphism styled-components",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "React.ElementType",
        },
      },
    },
  },
} as Meta<MediaMatchProps>;

export const lessThanExample: Story<MediaMatchProps> = (args) => {
  const { lessThan } = args;
  return (
    <div>
      Try to resize the screen <br /> <br />
      <MediaMatch {...args}>
        Matched!!! <br />
        @media (max-width: <b>{lessThan}</b> ) <br />
        <br />
        <pre>
          {JSON.stringify(
            {
              xhuge: "1920px",
              huge: "1440px",
              large: "1170px",
              medium: "769px",
              small: "450px",
              xsmall: "350px",
            },
            null,
            "\t"
          )}
        </pre>
      </MediaMatch>
    </div>
  );
};

lessThanExample.args = {
  lessThan: "medium",
};
lessThanExample.argTypes = {
  greaterThan: {
    control: { type: "null" },
  },
};

export const greaterThanExample: Story<MediaMatchProps> = (args) => {
  const { greaterThan } = args;
  return (
    <div>
      Try to resize the screen <br /> <br />
      <MediaMatch {...args}>
        Matched!!! <br />
        @media (min-width: <b>{greaterThan}</b> ) <br />
        <br />
        <pre>
          {JSON.stringify(
            {
              xhuge: "1920px",
              huge: "1440px",
              large: "1170px",
              medium: "769px",
              small: "450px",
              xsmall: "350px",
            },
            null,
            "\t"
          )}
        </pre>
      </MediaMatch>
    </div>
  );
};

greaterThanExample.argTypes = {
  lessThan: {
    control: { type: "null" },
  },
};
greaterThanExample.args = {
  greaterThan: "medium",
};
