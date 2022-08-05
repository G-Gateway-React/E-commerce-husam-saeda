import React from "react";
import {
  LinkHeaderText,
  LinkColumnContainer,
  LinkContent,
  LinkContentText,
} from "./LinkSectionFooter.style";

interface Props {
  data: {
    header: string;
    content: string[];
  };
}

const LinkColumn: React.FC<Props> = ({ data }) => {
  return (
    <LinkColumnContainer>
      <LinkHeaderText>{data.header}</LinkHeaderText>
      <LinkContent>
        {data.content.map((ele) => {
          return <LinkContentText key={ele} >{ele}</LinkContentText>;
        })}
      </LinkContent>
    </LinkColumnContainer>
  );
};
export default LinkColumn;
