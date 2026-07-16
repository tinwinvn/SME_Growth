export const FormField = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export const FieldGroup = ({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <h3
      className="font-bold mb-5 text-sm uppercase tracking-wider"
      style={{
        color: "#1b5e9e",
        borderBottom: "1px solid #c9ddf0",
        paddingBottom: "0.75rem",
      }}
    >
      {label}
    </h3>
    {children}
  </div>
);
