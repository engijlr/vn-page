import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string;
  full?: boolean;
};

function Button({ type, title, icon, variant, full }: ButtonProps) {
  return (
    <button
      className={`gap-3 rounded-full border text-secondary px-4 py-2 ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
}

export default Button;
