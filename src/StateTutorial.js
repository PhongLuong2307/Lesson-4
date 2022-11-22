import React, { useState } from "react";

function StateTutorial() {

    let [currentNumber, setCurrentNumber] = useState(0);
    // let myState = useState(0);
    // let currentNumber = useState[0];
    // let setMyState = useState[1];

    function checkEven(number) {
        return number % 2 === 0;
    }

    function addOne() {
        // currentNumber += 1;
        setCurrentNumber(currentNumber + 1);
        console.log(currentNumber + 1);

        let isEvenNumber = true;
        if (checkEven(currentNumber + 1) === true) {
            isEvenNumber = true;
        } else {
            isEvenNumber = false;
        }

        console.log(isEvenNumber);
    }

    // let isEvenNumber = true;

    // Dùng toán tử 3 ngôi

    // return (
    //     <div>
    //         <h1>This is {isEvenNumber === true ? "even number" : "odd number"}</h1>
    //     </div>
    // )

    // let titleElement = isEvenNumber === true ? (
    //     <h1>This is even number</h1>
    // ) : (
    //     <h1>This is odd number</h1>
    // );

    // Dùng if else
    // if(isEvenNumber === true) {
    //     titleElement  = <h1>This is even number</h1>
    // } else {
    //     titleElement = <h1>This is odd number</h1>
    // }

    // return <div>{titleElement}</div>

    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <h1>This is {currentNumber % 2 === true ? "even number" : "odd number"}</h1>
                <h1>{currentNumber}</h1>
                <div className="button">
                    <button onClick={addOne}>+</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StateTutorial;