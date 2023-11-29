import React, {useEffect, useRef} from 'react'
import Dialog from './Dialog';
import ResetPassword from './ResetPassword';
import ImageUpload from './ImageUpload';
import '../../../auth/auth.css'

const Modal = ({exam, newExam, dialog, openDialog, password, openPassword, upload, openUpload, userImage, updateExam, updateImage}) => {
  const modalRef = useRef();

  useEffect(() =>{
    let handleClose = (e) =>{
      if(!modalRef?.current?.contains(e.target)){
        openDialog(false);
        openPassword(false);
        openUpload(false);
      }
    };
    document.addEventListener('mousedown', handleClose);

    return()=>{
      document.removeEventListener('mousedown', handleClose);
    }
  }) 
  return (
    <div className={dialog || password || upload ? "modal-overlay show-modal" : "modal-overlay"}>
      <div ref={modalRef}>
        { dialog && <Dialog exam={exam} newExam={newExam} setDialog={openDialog} updateExam={updateExam}/> }
        { password && <ResetPassword setPassword={openPassword}/> }
        { upload && <ImageUpload userImage={userImage} setUpload={openUpload} updateImage={updateImage}/> }
      </div>
    </div>
  )
}

export default Modal;