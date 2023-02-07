import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png"

export const Banner = () => {
    // State variables: The component sets up 4 state variables using the useState hook.
    // loopNum: a counter that keeps track of which job title to display next
    const [loopNum, setLoopNum] = useState(0);
    // isDeleting: a boolean flag indicating whether the current text is being deleted
    const [isDeleting, setIsDeleting] = useState(false);
    // text: the current text to be displayed
    const [text, setText] = useState('');
    // delta: the interval at which the text should change
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Full Stack Developer" , "Web Designer", "UI/UX Designer", "Innovator", "Agile Developer", "Team Collaborator "  ]
    const period = 1000;

    // useEffect: The useEffect hook sets up a recurring interval that calls the "tick" function every "delta" milliseconds.
    // The effect is only triggered when the value of "text" changes. The effect returns a cleanup function that clears the interval
    // when the component unmounts.
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    }, [text])


    // tick function: The "tick" function performs the following actions:
    const tick = () => {
        // It means that the code is deciding which job title to display by using the "loopNum"
        // and the number of items in the "toRotate" array. The current job title being displayed
        // is found by using the "loopNum" and performing a division of "loopNum % toRotate.length".
        // This division gives the remainder when "loopNum" is divided by the length of the "toRotate"
        // array. This remainder is used as an index to retrieve the corresponding job title from the
        //     "toRotate" array.
        let i = loopNum % toRotate.length;

        // And finally, the line let updatedText = isDeleting ? fullText.substring(0, text.length-1) :
        // fullText.substring(0, text.length + 1); creates the new string based on the value of isDeleting.
        // If isDeleting is true, then updatedText is set to fullText.substring(0, text.length-1), which returns
        // a new string containing all characters of fullText except the last one. If isDeleting is false, then
        // updatedText is set to fullText.substring(0, text.length + 1), which returns a new string containing
        // all characters of fullText plus one additional character. The setText(updatedText) line sets the
        // value of the text state to updatedText.
        let fullText = toRotate[i];


        // And finally, the line let updatedText = isDeleting ? fullText.substring(0, text.length-1) :
        // fullText.substring(0, text.length + 1); creates the new string based on the value of isDeleting.
        // If isDeleting is true, then updatedText is set to fullText.substring(0, text.length-1), which
        // returns a new string containing all characters of fullText except the last one. If isDeleting
        // is false, then updatedText is set to fullText.substring(0, text.length + 1), which returns a new
        // string containing all characters of fullText plus one additional character. The setText(updatedText)
        // line sets the value of the text state to updatedText.
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updatedText);


        // This code is creating a new string based on the current value of the "isDeleting" flag.
        // If the "isDeleting" flag is true, then the code is subtracting 1 character from the full
        // text at each iteration and updating the "text" state with this new shortened string.
        // If the "isDeleting" flag is false, then the code is adding 1 character to the full text
        //  at each iteration and updating the "text" state with this new longer string.
        // In simpler terms, if the "isDeleting" flag is true, the code is making the text shorter
        //  by removing characters. If it's false, the code is making the text longer by adding characters.
        if(isDeleting) {
            setDelta(prevDelta => prevDelta/1.5)
            }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`"Hi, I'm David!" `}<br></br>{`<`}<span className="wrap">{text}</span >{`/>`}</h1 >
                        <p> About me</p>
                        <button onClick={() => console.log('connect')}> Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"  />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
