import Box from "../Box/Box";
import type allColors from "../colors/allColors";

const DeprecatedCardSizes = ["sm", "lg"] as const;

type CardType = {
  /**
   * Test id for the button
   */
  "data-testid"?: string;
  /**
   * The background color of the box.
   * @defaultValue `white`
   */
  backgroundColor?: (typeof allColors)[number];
  /**
   * The child components to render within Card.
   */
  children: JSX.Element;
  /**
   * The size of the card
   *
   * `sm`: 352px
   * `lg`: 744px
   *
   * @deprecated Card width should be controlled by the parent container
   * @defaultValue `undefined`
   */
  size?: (typeof DeprecatedCardSizes)[number];
};

/**
 * [Card](https://cambly-syntax.vercel.app/?path=/docs/components-card--docs) is a basic container component to apply consistent styling and render child components.
 */
export default function Card({
  backgroundColor = "white",
  children,
  size,
  "data-testid": dataTestId,
}: CardType): JSX.Element {
  const sizeWidth = {
    sm: 352,
    lg: 744,
  } as const;

  return (
    <Box
      rounding="lg"
      padding={5}
      smPadding={7}
      lgPadding={7}
      maxWidth={size && sizeWidth[size]}
      width="100%"
      backgroundColor={backgroundColor}
      data-testid={dataTestId}
    >
      {children}
    </Box>
  );
}
