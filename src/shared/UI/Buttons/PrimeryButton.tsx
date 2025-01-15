import styled from "styled-components";

const StyledPrimaryButton = styled.button`
  color: black;
  border-radius: 18px;
  width: 89px;
  height: 48px;
`;

interface IStyledPrimaryButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  chidlren: string;
}

const PrimeryButton: React.FC<IStyledPrimaryButton> = ({
  chidlren,
  ...props
}) => {
  return <StyledPrimaryButton {...props}>{chidlren}</StyledPrimaryButton>;
};

export default PrimeryButton;
