type AnswersProps = {
    content: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

export default function AnswersModal({ isOpen, content, onClose }: AnswersProps) {

    if (!isOpen) return null

    return (
        <>
            <div className="modal-backdrop-answers" onClick={onClose}>
                <div className="modal-content-answers" onClick={e => e.stopPropagation()}>
                    {content}
                </div>

            </div>
        </>
    )
}