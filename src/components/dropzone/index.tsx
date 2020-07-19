import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = (props) => {
    const [seletedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);

        setSelectedFileUrl(fileUrl);

        props.onFileUploaded(file);
    }, [props.onFileUploaded]);
    
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: 'image/*'
    });

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />

            {
                seletedFileUrl
                    ? <img src={seletedFileUrl} alt="Point thumbnail"></img>
                    :
                    (
                        <p>
                            <FiUpload></FiUpload>
                            Imagem do estabelecimento
                            </p>
                    )
            }

            
        </div>
    );
}

export default Dropzone;