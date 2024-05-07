import { type ComponentProps, forwardRef } from "react";
import Icon from "../../syntax-core/src/Icon/Icon";

const CircleEnclosedTick = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => (
  <Icon
    ref={ref}
    path="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM9.6 18l-4.8-4.8 1.8-1.8 3 3 7.8-7.8 1.8 1.8L9.6 18Z"
    color={color}
    size={size}
  />
));
CircleEnclosedTick.displayName = "CircleEnclosedTick";
export default CircleEnclosedTick;
