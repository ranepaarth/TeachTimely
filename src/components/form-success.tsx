import { InfoIcon } from "lucide-react";

const FormSuccess = ({ success }: { success: string }) => {
  return (
    <p className="bg-emerald-500/40 text-emerald-600 border border-emerald-600 rounded px-4 py-2 flex items-center gap-2 text-sm">
      <InfoIcon className="w-4 h-4" />
      {success}
    </p>
  );
};

export default FormSuccess;
