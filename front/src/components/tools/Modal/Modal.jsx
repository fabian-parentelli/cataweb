import './modal.css';

const Modal = ({ children, open = false, onClose }) => {
    
    if (!open) return null;

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal')) onClose();
    };

    return (
        <div className='modal' onClick={handleOutsideClick}>
            <section className='modalSect' onClick={(e) => e.stopPropagation()}>
                {children}
            </section>
        </div>
    );
};

export default Modal;