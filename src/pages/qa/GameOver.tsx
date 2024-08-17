
type GameOverProps = {
    content: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

export default function GameOver({ isOpen, content, onClose }: GameOverProps) {

    if (!isOpen) return null

    return (
        <>
            
        </>
    )
}
