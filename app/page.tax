import React, { useEffect, useState } from 'react';
import Cell from "./components/cell";

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export default function Game() {
    const [cells, setCells] = useState(Array(9).fill(""));
    const [go, setGo] = useState("circle");
    const [winningMessage, setWinningMessage] = useState("");

    useEffect(() => {
        winningCombos.forEach(combo => {
            const circleWins = combo.every(cell => cells[cell] === "circle");
            const crossWins = combo.every(cell => cells[cell] === "cross");
            
            if (circleWins) {
                setWinningMessage("Circle wins!");
            } else if (crossWins) {
                setWinningMessage("Cross wins!");
            }
        });
    }, [cells]);

    useEffect(() => {
        if (cells.every(cell => cell !== "") && !winningMessage) {
            setWinningMessage("It's a draw!");
        }
    }, [cells, winningMessage]);

    return (
        <main className="container">
            <div className="gameboard">
                {cells.map((cell, index) => (
                    <Cell
                        id={index}
                        go={go}
                        setGo={setGo}
                        key={index}
                        cells={cells}
                        setCells={setCells}
                        cell={cell}
                        winningMessage={winningMessage}
                    />
                ))}
            </div>
            <div>{winningMessage}</div>
            {!winningMessage && <div>{`It's ${go}'s turn`}</div>}
        </main>
    );
}