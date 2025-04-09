import './cloudFile.css';
import { useState, useRef } from 'react';

const CloudFile = ({ onChange, folderName, contClass, id }) => {

    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);

    const handleImgChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const newFiles = [...files, ...selectedFiles];
        newFiles.sort((a, b) => a.name.localeCompare(b.name));
        setFiles(newFiles);

        const filePreviews = newFiles.map(file => {
            if (file.type.startsWith("image/")) {
                return { url: URL.createObjectURL(file), type: "image" };
            } else if (file.type === "application/pdf") {
                return { url: "/pdf-icon.png", type: "pdf", fileUrl: URL.createObjectURL(file) };
            }
            return null;
        }).filter(Boolean);

        setImages(filePreviews);

        const formData = new FormData();
        newFiles.forEach(file => formData.append("files", file));
        formData.append("folderName", folderName);
        if (id) formData.append("pid", id);
        onChange(formData);
    };


    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={`cloudFile ${contClass}`} onClick={handleClick}>
            <input
                type="file"
                name='files'
                accept="image/*,application/pdf"
                className='file-inside'
                hidden
                ref={fileInputRef}
                multiple
                onChange={handleImgChange}
            />

            {images.length > 0 ? (
                <div className='image-container'>
                    {images.map((file, index) => (
                        file.type === "image" ? (
                            <img key={index} src={file.url} className={images.length === 1 ? "imgFile" : "thumbnail"} alt={`preview-${index}`} />
                        ) : (
                            <a key={index} href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                                <img src='/pdf.png' className="pdf-icon" alt="PDF preview" />
                            </a>
                        )
                    ))}
                </div>
            ) : (
                <img src='/cata.png' alt="img" className='cloudUploadIcon' />
            )}
        </div>
    );
};

export default CloudFile;

// cfRect - cfCircle - cfTicket