import Link from "next/link";
import { FC } from "react";

interface BadgeProps {
  name: string;
  href: string;
  backgroundColor: string;
  color: string;
}

const Badge: FC<BadgeProps> = ({ name, href, backgroundColor, color }) => {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };
  return (
    <div>
      <Link
        href={href}
        className="rounded-full uppercase px-6 py-2 text-center"
        style={style}
      >
        {name}
      </Link>
    </div>
  );
};

export default Badge;
