import {
  Activity, ArrowDown, ArrowLeft, ArrowRight, BookMarked, BookOpen, Bookmark, Box, Check, ChevronDown, ChevronRight,
  CircleCheck, CircleUser, Compass, CornerDownRight, Download, Droplets, ExternalLink, FileDown, FileText, FlaskConical,
  FolderOpen, Globe, Smartphone, GraduationCap, Info, Mail, Map as MapIcon, MapPin, Menu, Minus, Plus, Search, TriangleAlert, Waves,
  Wrench, X,
  type LucideIcon,
} from "lucide-react";

/* Lucide (conjunto do design system). Só os ícones usados entram no bundle. */
const ICONS = {
  activity: Activity, "arrow-down": ArrowDown, "arrow-left": ArrowLeft, "arrow-right": ArrowRight,
  "book-marked": BookMarked, "book-open": BookOpen, bookmark: Bookmark, box: Box, check: Check,
  "chevron-down": ChevronDown, "chevron-right": ChevronRight, "check-circle": CircleCheck, "circle-user": CircleUser,
  compass: Compass, "corner-down-right": CornerDownRight, download: Download, droplets: Droplets,
  "external-link": ExternalLink, "file-down": FileDown, "file-text": FileText, "flask-conical": FlaskConical,
  "folder-open": FolderOpen, globe: Globe, "graduation-cap": GraduationCap, info: Info, mail: Mail, map: MapIcon,
  "map-pin": MapPin, smartphone: Smartphone, menu: Menu, minus: Minus, plus: Plus, search: Search, "alert-triangle": TriangleAlert,
  waves: Waves, wrench: Wrench, x: X,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof ICONS;

export function Icon({ name, size = 20, strokeWidth = 1.75, className }: { name: IconKey; size?: number; strokeWidth?: number; className?: string }) {
  const Cmp = ICONS[name];
  return (
    <span className={`icon${className ? ` ${className}` : ""}`} aria-hidden="true">
      <Cmp size={size} strokeWidth={strokeWidth} />
    </span>
  );
}
