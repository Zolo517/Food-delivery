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
}: Props) => {
  if (text === "text") {
    return (
      <div className="flex justify-between">
        <Label htmlFor={id}>{label}</Label>
        <Textarea
          name={id}
          id={id}
          placeholder={place}
          style={{ width: w, height: h }}
        />
      </div>
    );
  } else if (gap === "gap") {
    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        {id === "ingre" ? (
          <Textarea
            id={id}
            placeholder={place}
            style={{ width: w, height: h }}
            name={id}
          />
        ) : (
          <Input
            id={id}
            type={type}
            name={id}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder={place}
            className="border-[#E4E4E7]-1 rounded-md"
            style={{ height: h }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-between">
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={id}
        type={type}
        placeholder={place}
        style={{ width: w, height: h }}
        id={id}
      />
    </div>
  );
};
