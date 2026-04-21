import { cn } from "@/lib/utils";

export function SectionSeparator({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center py-12", className)}>
      <hr className="w-1/2 border-t border-gray-700" />
    </div>
  );
}
