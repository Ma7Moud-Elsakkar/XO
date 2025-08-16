import { Dispatch } from "react";


type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<React.SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<React.SetStateAction<string[]>>;
    cell: string;
    winningMatch: string;
}


const Cell = ({ id, go, setGo, cells, setCells, cell, winningMatch }: CellProps) => {

    const handleClick = () => {

        if (winningMatch) {
            return;
        }
        
        const notTaken = !cells[id];
        if (notTaken) {

        
            if(go === "circle" ) {
                cellChange("circle")
                setGo("cross");
            } else if(go === "cross") {
                cellChange("cross")
                setGo("circle");
            }
        }
    }

    const cellChange =  (celltoChange: string) => {
        let newCells = [...cells];
        newCells[id] = celltoChange;
        setCells(newCells);
    }
    return (
        <div className="square" onClick={handleClick}>
            <div className={cell}>
                {cell ? (cell === "circle" ? "O" : "X" ) : ""}
            </div>
        </div>
    );
}



export default Cell;