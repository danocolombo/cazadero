import { useRef } from 'react';

export const UploadFile = ({ uploadHandler }) => {
    const uploadRef = useRef();

    const handleFiles = () => {
        const file = uploadRef.current.files[0];
        if (file.type === 'message/rfc822') {
            file.text().then(uploadHandler);
        }
    };

    return (
        <input
            ref={uploadRef}
            onChange={handleFiles}
            type='file'
            id='upload-eml'
            name='upload-eml'
        />
    );
};
