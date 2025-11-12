interface AvatarProps {
  name?: string;
}

export default function Avatar({ name }: AvatarProps) {
  const initial = name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-semibold text-sm text-accent-foreground">
      {initial}
    </div>
  );
}
