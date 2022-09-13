import React, {useState, useRef, useEffect} from 'react'

const image = ["http://pa1.narvii.com/6434/c4b1b4dabb9ed4fa32f21979a2da69a7bac2bdf0_00.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtMAoCCHaKh-52W7WtENcAxFk61tmAXeQY3Bz7jZAyzFTry-GTSnR3KKIfda6lggNP9M&usqp=CAU", "https://meme-generator.com/wp-content/uploads/mememe/2020/09/what-time-is-it-its-quiz-time-254070-1.jpg"];
const delay = 2500;

const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === image.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {image.map((background, index) => (
          <div
            className="slide"
            key={index}
            style={{backgroundImage: "url(" + background + ")", backgroundRepeat: 'no-repeat', height: '400px', backgroundSize: 'cover', backgroundPosition: 'center'}}
          >
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {image.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
  
}

export default Slideshow;

