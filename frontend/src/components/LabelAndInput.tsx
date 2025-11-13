import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
type Props = {
  label: string;
  w?: string;
  h?: string;
  place?: string;
  text?: string;
  type?: string;
  gap?: string;
  id: string;
  value?: string;
  onChange?: (e: {
    target: {
      name: any;
      value: any;
    };
  }) => void;
};

export const LabelAndInput = ({
  label,
  w,
  h,
  place,
  text,
  type,
  gap,
  id,
  value,
  onChange,
}: Props) => {
  if (text === "text") {
    return (
      <div className="flex justify-between">
        <Label htmlFor={id}>{label}</Label>
        <Textarea
          name={id}
          id={id}
          placeholder={place}
          value={value}
          onChange={onChange}
          style={{ width: w, height: h }}
          defaultValue={id}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${gap === "gap" ? "flex-col gap-2" : "justify-between"}`}
    >
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={id}
        type={type}
        placeholder={place}
        value={value}
        onChange={onChange}
        style={{ width: w, height: h }}
        id={id}
        defaultValue={id}
      />
    </div>
  );
};
