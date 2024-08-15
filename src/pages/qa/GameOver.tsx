
type GameOverProps = {
    content: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

export default function GameOver({ isOpen, content, onClose }: GameOverProps) {

    if (!isOpen) return null

    return (
        <>
            <div className="modal-backdrop-qa" onClick={onClose}>
                <div className="modal-content-qa" onClick={e => e.stopPropagation()}>
                    <div className="modal-info-qa">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}
