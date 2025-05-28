// import { Badge } from './ui/badge'

// type BadgeStatusProps = {
//   isNew?: boolean
//   isUpdated?: boolean
//   isComingSoon?: boolean
// }

// const BadgeStatus = ({ isNew, isUpdated, isComingSoon }: BadgeStatusProps) => {
//   if (isNew) {
//     return <Badge variant="outline" className=" text-blue-500 border-blue-500 bg-blue-100/50 dark:bg-blue-950/50 leading-normal">New</Badge>
//     // return <Badge variant="outline" className=" text-green-500 border-green-500 bg-green-100/50 dark:bg-green-950/50">New</Badge>
//   }
//   if (isUpdated) {
//     // return <Badge variant="outline" className="text-green-500 border-green-500 bg-green-100/50 dark:bg-green-950/50">Updated</Badge>
//     return <Badge variant="outline" className="text-yellow-500 border-yellow-500 bg-yellow-100/50 dark:bg-yellow-950/50 leading-normal">Updated</Badge>
//   }
//   if (isComingSoon) {
//     return <Badge variant="outline" className="text-violet-500 border-violet-500 bg-violet-100/50 dark:bg-violet-950/50 leading-normal">Soon</Badge>
//   }
//   return null
// }

// export default BadgeStatus
import { Badge } from "./ui/badge";

type BadgeVariant = "new" | "updated" | "comingsoon" | "paid";

type BadgeStatusProps = {
  variant: BadgeVariant;
};

//bg-yellow-100/50 dark:bg-yellow-950/50
const variantStyles: Record<BadgeVariant, string> = {
  // new: "text-blue-500 border-blue-500 bg-[#ECF4FE] dark:bg-[#0F1630] leading-normal",

  new: "leading-normal border bg-blue-100 text-blue-700 border-blue-200 dark:text-blue-600 dark:bg-blue-950/50 dark:border-blue-950",

  // updated: "text-yellow-500 border-yellow-500 bg-[#FEFCE0] dark:bg-[#251407] leading-normal",

  updated: "leading-normal border bg-yellow-100 text-yellow-700 border-yellow-200 dark:text-yellow-600 dark:bg-yellow-950/50 dark:border-yellow-950",

  // comingsoon: "text-violet-500 border-violet-500 bg-[#F5F3FE] dark:bg-[#1B0A39] leading-normal",
  comingsoon: "leading-normal border bg-violet-100 text-violet-700 border-violet-200 dark:text-violet-600 dark:bg-violet-950/50 dark:border-violet-950",

  // paid: "text-green-500 border-green-500 bg-[#EDFDF2] dark:bg-[#061B10] leading-normal",
  paid: "leading-normal border bg-green-100 text-green-700 border-green-200 dark:text-green-600 dark:bg-green-950/50 dark:border-green-950",
};

const variantLabel: Record<BadgeVariant, string> = {
  new: "New",
  updated: "Updated",
  comingsoon: "Soon",
  paid: "Pro",
};

const BadgeStatus = ({ variant }: BadgeStatusProps) => {
  return (
    <Badge variant="outline" className={variantStyles[variant]}>
      {variantLabel[variant]}
    </Badge>
  );
};

export default BadgeStatus;

