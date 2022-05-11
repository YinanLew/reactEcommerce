import React, {useState} from 'react';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';


import './flip.css';
import {Button, IconButton} from "@mui/material";

function FlippedBook() {
    const [book, setBook] = useState({});
    const [pre, setPre] = useState({});
    const [next, setNext] = useState({});
    const [currentLocation, setCurrentLocation] =useState(1);
    // console.log(next)
    const [ActiveF1, setActiveF1] = useState(false);
    const [ActiveF2, setActiveF2] = useState(false);
    const [ActiveF3, setActiveF3] = useState(false);
    const [zIndex1, setZIndex1] = useState({zIndex: 3});
    const [zIndex2, setZIndex2] = useState({zIndex: 2});
    const [zIndex3, setZIndex3] = useState({zIndex: 1});



    function openBook () {
        if (window.innerWidth > 700) {
            setBook({transform: 'translateX(80%)'});
            setPre({transform: 'translateX(-55px)'});
            setNext({transform: 'translateX(230px)'});
        } else {
            setBook({transform: 'translateX(50%)'});
            setPre({transform: 'translateX(-50px)'});
            setNext({transform: 'translateX(50px)'});
        }
    }


    function closeBook(isAtBeginning) {
        if(isAtBeginning) {
            setBook({transform:'translateX(0%)'});
        } else {
            setBook({transform: 'translateX(100%)'});
        }
        if (window.innerWidth>700) {
            setPre({transform: 'translateX(10px)'});
            setNext({transform: 'translateX(-3px)'});
        } else {
            setPre({transform: 'translateX(10px)'});
            setNext({transform: 'translateX(-3px)'});
        }
    }

    const nextStep = () => {
        if (currentLocation<4){
            setCurrentLocation((pre) => pre + 1);
        }
        goNextPage();


    };
    let numOfPapers = 3;
    let maxLocation = numOfPapers + 1;
    function goNextPage() {
        if(currentLocation < maxLocation) {
            switch(currentLocation) {
                case 1:
                    // setBookStyle(true);
                    if (window.innerWidth > 700) {
                        setBook({transform: 'translateX(70%)'});
                        setPre({transform: 'translateX(-90px)'});
                        setNext({transform: 'translateX(210px)'});
                        setActiveF1(true);
                        setZIndex1({zIndex: 1});
                    } else {
                        setBook({transform: 'translateX(50%)'});
                        setPre({transform: 'translateX(-50px)'});
                        setNext({transform: 'translateX(50px)'});
                        setActiveF1(true);
                        setZIndex1({zIndex: 1});
                    }
                    break;
                case 2:
                    setActiveF2(true);
                    setZIndex2({zIndex: 2});
                    break;
                case 3:
                    setActiveF3(true);
                    setZIndex3({zIndex: 3});
                    closeBook(false);
                    break;
                default:
                    console.log('book err');
            }
        }
    }

    const preStep = () => {
        if (currentLocation>1) {
            setCurrentLocation((pre) => pre - 1);
        }
        goPrevPage();
    };
    function goPrevPage() {
        if(currentLocation > 1) {
            switch(currentLocation) {
                case 2:
                    console.log(currentLocation)
                    closeBook(true);
                    setActiveF1(false);
                    setZIndex1({zIndex: 3});
                    break;
                case 3:
                    console.log(currentLocation)
                    setActiveF2(false);
                    setZIndex2({zIndex: 2});
                    break;
                case 4:
                    console.log(currentLocation)
                    openBook();
                    setActiveF3(false);
                    setZIndex3({zIndex: 1});
                    break;
                default:
                    console.log('book err')
            }
        }
    }



    return (
        <div className={"body"}>
            <IconButton className={"btn"} id="prev-btn" style={pre} color={"secondary"} onClick={preStep}>
                <ArrowCircleLeftSharpIcon />
            </IconButton>


            {/*style={ bookStyle ? bookS : null*/}
            <div id="book" className="book" style={book} >

                <div id="p1" className={ ActiveF1 ? "flipped" : ""} style={zIndex1}>
                    <div className="front">
                        <div id="f1" className="cover-content">
                            <h1>SS 2022</h1>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b1" className="back-content">
                            <h1></h1>
                        </div>
                    </div>
                </div>

                <div id="p2"   className={ ActiveF2 ? "flipped" : ""}    style={zIndex2}>
                    <div className="front">
                        <div id="f2" className="front-content">
                            <h1></h1>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b2" className="back-content">
                            <h1></h1>
                        </div>
                    </div>
                </div>

                <div id="p3"   className={ ActiveF3 ? "flipped" : ""}     style={zIndex3}>
                    <div className="front">
                        <div id="f3" className="front-content">
                            <h1></h1>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b3" className="back-content">
                            <h1>End</h1>
                        </div>
                    </div>
                </div>
            </div>


            <IconButton className={"btn"} onClick={nextStep} id="next-btn" style={next} color={"secondary"}>
                <ArrowCircleRightSharpIcon />
            </IconButton>
        </div>
    );
}

export default FlippedBook;