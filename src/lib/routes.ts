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
      label: "Recommended",
      icon: Icons.ThumbsUp,
      href: "/userDashboard/recommended",
    },
    {
      label: "Score",
      icon: Icons.BarChart4,
      href: "/userDashboard/score",
    }, 
];

export const adminRoutes = [
    {
      label: "Dashboard",
      icon: Icons.LayoutDashboard,
      href: "/adminDashboard",
    },
    {
      label: "Users",
      icon: Icons.Users2,
      href: "/adminDashboard/users",
    },
    {
      label: "Lessons",
      icon: Icons.Book,
      href: "/adminDashboard/lessons",
    },
    {
      label: "Assessments",
      icon: Icons.FileText,
      href: "/adminDashboard/assessments",
    },
    {
      label: "Top Scores",
      icon: Icons.BarChart4,
      href: "/adminDashboard/scores",
    },
];