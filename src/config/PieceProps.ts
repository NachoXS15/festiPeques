export default interface PieceProps {
    block: number;
    referenceImg: string;
    pieces: {
        pieceID: number;
        pieceImg: string;
    }[];
}