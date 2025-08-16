import React from 'react';

type CellProps = {
    id: number;
    go: string;
    setGo: React.Dispatch<React.SetStateAction<string>>;
    cells: string[];
    setCells: React.Dispatch<React.SetStateAction<string[]>>;
    cell: string;
    winningMessage: string;
};

const Cell = ({ id, go, setGo, cells, setCells, cell, winningMessage }: CellProps) => {
    const handleClick = () => {
        if (winningMessage) {
            return;
        }
        
        const notTaken = !cells[id];
        if (notTaken) {
            if (go === "circle") {
                handleCellChange("circle");
                setGo("cross");
            } else if (go === "cross") {
                handleCellChange("cross");
                setGo("circle");
            }
        }
    };

    const handleCellChange = (cellValue: string) => {
        let newCells = [...cells];
        newCells[id] = cellValue;
        setCells(newCells);
    };

    return (
        <div className="square" onClick={handleClick}>
            <div className={cell}>
                {cell ? (cell === "circle" ? "O" : "X") : ""}
            </div>
        </div>
    );
};

export default Cell;