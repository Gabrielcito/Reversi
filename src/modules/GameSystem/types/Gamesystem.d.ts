export interface GameSystemProps {
    children: (props: { currentPlayer: string | null; handleTurnChange: () => void }) => ReactNode;
}