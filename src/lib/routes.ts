import Icons from "@/components/ui/Icons";

export const userRoutes = [
    {
      label: "Dashboard",
      icon: Icons.LayoutDashboard,
      href: "/userDashboard",
    },
    {
      label: "Lesson",
      icon: Icons.Book,
      href: "/userDashboard/lesson",
    },
    {
      label: "Assessment",
      icon: Icons.FileText,
      href: "/userDashboard/assessment",
    },
    {
      label: "Score",
      icon: Icons.BarChart4,
      href: "/userDashboard/score",
    },
    {
      label: "Settings",
      icon: Icons.Settings,
      href: "/userDashboard/settings",
    },
];

export const adminRoutes = [
    {
      label: "Dashboard",
      icon: Icons.LayoutDashboard,
      href: "/adminDashboard",
    },
    {
      label: "Lesson",
      icon: Icons.Book,
      href: "/adminDashboard/lesson",
    },
    {
      label: "Assessment",
      icon: Icons.FileText,
      href: "/adminDashboard/assessment",
    },
    {
      label: "Score",
      icon: Icons.BarChart4,
      href: "/adminDashboard/score",
    },
];