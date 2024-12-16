import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import cls from "classnames";
import { Rating } from "react-simple-star-rating";
import React from "react";

interface StarRatingProps {
   size: "sm" | "lg" | "md" | "xl";
   initialValue?: number;
   ratingValue?: number;
   tooltip?: boolean;
   style?: React.CSSProperties;
   className?: string;
   readonly?: boolean;
   showRatingCaption?: boolean;
}

const StarRating = (props: StarRatingProps) => {
   const { ratingValue, size = "md", className } = props;
   const sizeMap: Record<StarRatingProps["size"], number> = {
      sm: 14,
      md: 17,
      lg: 24,
      xl: 39,
   };

   return (
      <div
         className={cls(className, "d-flex", "align-items-center")}
         style={props.style}
      >
         <Rating
            // onClick={rating => props.onRate?.(rating)}
            initialValue={props.initialValue || 0}
            readonly={props.readonly}
            disableFillHover={true}
            showTooltip={props.tooltip}
            iconsCount={5}
            tooltipArray={["Terrible", "Poor", "Average", "Good", "Excellent"]}
            tooltipClassName='position-absolute '
            tooltipStyle={{ backgroundColor: "transparent", color: "#000" }}
            emptyIcon={
               <Icon
                  // icon="mdi:star-circle"
                  icon='octicon:feed-star-16'
                  color='#ccc'
                  inline
                  width={sizeMap[size]}
                  key={uuid()}
                  style={{ marginRight: "3px" }}
               />
            }
            fillIcon={
               <Icon
                  // icon="mdi:star-circle"
                  icon='octicon:feed-star-16'
                  color='#024180'
                  inline
                  width={sizeMap[size]}
                  key={uuid()}
                  style={{ marginRight: "3px" }}
               />
            }
         />
      </div>
   );
};

export default StarRating;
