import styled from 'styled-components';

const DownloadLink = styled.a`
  display: inline-flex;
  justify-content: center; 
  align-items: center; 
  border: 1px solid #000000;
  border-radius: 74px;
  color: #000000;
  height: 36px;
  width: 147px;
  text-decoration: none;
`;

const ButtonText = styled.h2`
  margin: 0;
  padding: 0;
`;

export const ResumeButton = () => {
  return (
    <DownloadLink href="/resume/SchuebertResume.pdf" download="SchuebertResume.pdf">
      <ButtonText>RESUME</ButtonText>
    </DownloadLink>
  );
};

export default ResumeButton;