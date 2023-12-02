type IconProps = {
  icon: string;
};

export default function ArrowIcon({ icon }: IconProps) {
  return (
    <i className={`symbol`}>{icon}</i> // Use as documented in Material System guide
  );
}
