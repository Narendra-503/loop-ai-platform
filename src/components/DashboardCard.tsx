import {
  MessageSquare,
  Smile,
  Frown,
  Meh,
  CheckCircle,
  ClipboardCheck,
  Clock,
  LucideIcon,
} from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: string | number;
};

const iconMap: Record<
  string,
  {
    icon: LucideIcon;
    bg: string;
    iconColor: string;
  }
> = {
  "Total Feedback": {
    icon: MessageSquare,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  Positive: {
    icon: Smile,
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
  Negative: {
    icon: Frown,
    bg: "bg-red-100",
    iconColor: "text-red-600",
  },
  Neutral: {
    icon: Meh,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  Reviewed: {
    icon: CheckCircle,
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  Actioned: {
    icon: ClipboardCheck,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  Pending: {
    icon: Clock,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  const card = iconMap[title];

  const Icon = card?.icon ?? MessageSquare;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            {value}
          </h2>

          <p className="mt-3 text-sm text-green-600">
            ↑ Updated in real time
          </p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            card?.bg ?? "bg-blue-100"
          }`}
        >
          <Icon
            className={card?.iconColor ?? "text-blue-600"}
            size={28}
          />
        </div>
      </div>
    </div>
  );
}