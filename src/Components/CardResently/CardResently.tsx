import * as React from "react";
// import { useTheme } from '@mui/material/styles';
import CardMedia from "@mui/material/CardMedia";
import { Button, CustomCard } from "./CardResently.style";
interface Props {
  link: string;
}
// interface Hover{
//   hover:boolean;
// }
// type Hover = boolean;
console.log(typeof true);
const MediaControlCard: React.FC<Props> = (props) => {
  const [hover, setHover] = React.useState<boolean>(false);
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <CustomCard>
      <CardMedia
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        component="img"
        sx={{ width: 300 }}
        image={props.link}
        alt="Live from space album cover"
      />
      <Button hover={hover}>more info</Button>
    </CustomCard>
  );
};
export default MediaControlCard;
