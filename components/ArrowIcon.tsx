type ArrowIconProps = {
  icon: string;
  className?: string;
};

export default function ArrowIcon({ icon, className }: ArrowIconProps) {
  return (
    <i onClick={() => console.log("yes")} className={`symbol ${className}`}>
      {icon}
    </i> // Use as documented in Material System guide
  );
}
