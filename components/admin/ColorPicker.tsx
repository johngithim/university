import { HexColorInput, HexColorPicker } from "react-colorful";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  value?: string;
  onPickerChange: (color: string) => void;
}

const ColorPicker = ({ value, onPickerChange }: Props) => {
  const router = useRouter();

  return (
    <div className={"relative"}>
      <div className={"flex flex-row  items-center"}>
        <p>#</p>
        <HexColorInput
          color={value}
          onChange={onPickerChange}
          className={"hex-input"}
        />
      </div>
      <HexColorPicker color={value} onChange={onPickerChange} />
    </div>
  );
};

export default ColorPicker;
