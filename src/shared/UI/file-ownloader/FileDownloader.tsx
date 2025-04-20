import styled from 'styled-components';
import IconFile from './icon/IconFile';
import { useEditUserContext } from '@/pages/profile/page/EditPage.tsx/context/EditUserContext';

const StyledLabel = styled.label`
    border: 1px dashed #cbd5e1;
    width: 444px;
    height: 170px;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 32px;

    & span {
        color: var(--normal);
        font-weight: 700;
        font-size: 16px;
    }
    & p {
        padding-top: 8px;
        font-weight: 500;
        font-size: 12px;
        opacity: 0.4;
    }
`;

const FileDownloader: React.FC<{ maxSize: number }> = ({ maxSize }) => {
    const { setData } = useEditUserContext();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setData(prev => (prev ? { ...prev, avatarFile: selectedFile } : null));
        }
    };
    return (
        <>
            <StyledLabel htmlFor='filedownloader' className={'df jcsb fdc'}>
                <div className={'df jcc'}>
                    <IconFile />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span>Нажмите здесь</span> чтобы загрузить файл, или перетащите его.
                    <p>Поддерживаемый формат: SVG, JPG, PNG (по {maxSize} МБ каждый).</p>
                </div>
            </StyledLabel>
            <input type='file' id='filedownloader' onChange={handleFileChange} style={{ display: 'none' }} />
        </>
    );
};

export default FileDownloader;
