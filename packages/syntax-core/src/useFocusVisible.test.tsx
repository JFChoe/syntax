import { screen, render } from "@testing-library/react";
import RadioButton from "./RadioButton/RadioButton";
import useFocusVisible from "./useFocusVisible";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("test focus radioButton", () => {
  it("do not focus when a user clicks on the component", async () => {
    const handleChange = vi.fn();
    render(<RadioButton label="Radio Button Label" onChange={handleChange} />);
    const radioButton = await screen.findByLabelText("Radio Button Label");
    // eslint-disable-next-line testing-library/no-await-sync-events
    await userEvent.click(radioButton);
    expect(radioButton).not.toHaveFocus();
  });

  // TODO this isn't actually testing useFocusVisible
  it("focus when a user uses a keyboard to select the component", async () => {
    const handleChange = vi.fn();
    render(
      <RadioButton
        checked={true}
        label="Radio Button Label"
        onChange={handleChange}
      />,
    );
    const radioButton = await screen.findByLabelText("Radio Button Label");
    // eslint-disable-next-line testing-library/no-await-sync-events
    await userEvent.keyboard("{Tab}");
    expect(radioButton).toHaveFocus();
  });
});
