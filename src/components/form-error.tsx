import { InfoIcon } from "lucide-react";

const FormError = ({ error }: { error: string }) => {
  return (
    <p className="bg-destructive/40 text-destructive border border-destructive rounded px-4 py-2 flex items-center gap-2 text-sm">
      <InfoIcon className="w-4 h-4" />
      {error}
    </p>
  );
};

export default FormError;
