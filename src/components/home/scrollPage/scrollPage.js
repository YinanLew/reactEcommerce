import { useLayoutEffect, useState} from "react";
import Header from "../Header/Header";


const ScrollDown = (id) => {
    const [animation, setAnimation] = useState(false);

        useLayoutEffect(() => {
            function updatePosition() {
                const heightScroll = window.document.getElementById(id).offsetHeight;
                // console.log(window.pageYOffset, heightScroll)
                if (window.pageYOffset > heightScroll * 0.5) {
                    setAnimation(true);
                }
            }

            window.addEventListener('scroll', updatePosition);
            updatePosition();
            return () => window.removeEventListener('scroll', updatePosition);
        }, [id]);
        return animation;


}

export default ScrollDown;


//
// scrollPage = (id) => {
//     const [animation, setAnimation] = useState(false);
//
//     useLayoutEffect(() => {
//         function updatePosition() {
//             const heightScroll = window.document.getElementById(id).offsetHeight;
//             console.log(window.pageYOffset, heightScroll)
//             if (window.pageYOffset > heightScroll * 0.7) {
//                 setAnimation(true);
//             }
//         }
//
//         window.addEventListener('scrollPage', updatePosition);
//         updatePosition();
//         return () => window.removeEventListener('scrollPage', updatePosition);
//     }, [id]);
//     return animation;
// }