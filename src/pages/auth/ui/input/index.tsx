import styled from "styled-components";

interface IAuthInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const StyledAuthInput = styled.input`
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  background: #e4e4e4;
`;

const StyledAuthLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: #7b7b7b;
`;

const AuthInput: React.FC<IAuthInput> = ({ label, ...props }) => {
  return (
    <>
      <StyledAuthLabel>{label}</StyledAuthLabel>
      <StyledAuthInput {...props} />
    </>
  );
};

export default AuthInput;
