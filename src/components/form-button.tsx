import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type FormButtonProps = {
  isPending: boolean;
  label: string;
};

const FormButton = ({ isPending, label }: FormButtonProps) => {
  return (
    <Button type="submit" className="w-full" disabled={isPending}>
      {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : label}
    </Button>
  );
};

export default FormButton;
