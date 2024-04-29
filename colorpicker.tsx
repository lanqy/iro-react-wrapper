import iro from "@jaames/iro";
import { IroColorPicker } from "@jaames/iro/dist/ColorPicker";
import { LayoutDirection, WheelDirection } from "@irojs/iro-core";
import { useRef, useEffect } from "react";
interface ColorPickerLayoutDefinition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}
export interface ColorPickerProps {
  //internal irojs props
  width?: number;
  height?: number;
  color?: string;
  colors?: iro.Color[];
  padding?: number;
  layoutDirection?: LayoutDirection;
  borderColor?: string;
  borderWidth?: number;
  handleRadius?: number;
  activeHandleRadius?: number;
  handleSvg?: string;
  handleProps?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  wheelLightness?: boolean;
  wheelAngle?: number;
  wheelDirection?: WheelDirection;
  sliderSize?: number;
  sliderMargin?: number;
  boxHeight?: number;
  layout?: ColorPickerLayoutDefinition[] | "default";
}

export default function ColorPicker({
  options,
  onChange,
}: {
  options: ColorPickerProps;
  onChange: (val: iro.Color) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const colorPicker = useRef<IroColorPicker>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (!colorPicker.current) {
      colorPicker.current = iro.ColorPicker(ref.current!, {
        ...options,
      });
      colorPicker.current.on("color:change", (color: iro.Color) =>
        onChange(color)
      );
    } else if (options.color !== colorPicker.current.color.hexString) {
      options?.color && colorPicker.current.color.set(options?.color);
    }
  }, [options]);

  return (
    <>
      <div ref={ref}></div>
    </>
  );
}
