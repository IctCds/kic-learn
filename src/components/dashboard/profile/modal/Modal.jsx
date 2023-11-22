import React, {useEffect, useRef} from 'react'
import Dialog from './Dialog';
import ResetPassword from './ResetPassword';
import ImageUpload from './ImageUpload';
import '../../../auth/auth.css'

const Modal = ({exam, newExam, dialog, openDialog, password, openPassword, upload, openUpload}) => {
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
        { dialog && <Dialog exam={exam} newExam={newExam} setDialog={openDialog}/> }
        { password && <ResetPassword/> }
        { upload && <ImageUpload/> }
      </div>
    </div>
  )
}

export default Modal;