import { FC } from "react";
import Skeleton from "@mui/material/Skeleton";

export interface ICustomSkeleton {
  height?: string;
}

export const CustomSkeleton: FC<ICustomSkeleton> = ({ height }) => (
  <Skeleton
    sx={{ borderRadius: "10px", display: "flex", maxWidth: "100%" }}
    variant="rectangular"
    height={height ? `${height}` : "100%"}
  />
);
