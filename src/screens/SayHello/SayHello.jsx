import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// @utils
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import './SayHello.scss';

// @assets
import handshake from '../../assets/handshake.svg';

const SayHello = () => {
  const imgRef = useRef(null);
  const txtRef = useRef(null);
  const resumeRef = useRef(null);
  const emailRef = useRef(null);
  const linksRef = useRef(null);

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({ defaults: { duration: 0.8, ease: 'power4.out', opacity: 1 } })
      .to(imgRef.current, {
        delay: 0.3,
        y: 20,
      })
      .to(txtRef.current, {
        y: -40,
      })
      .to(resumeRef.current, {
        y: -40,
      })
      .to(emailRef.current, {
        y: -40,
      })
      .to(linksRef.current, {
        y: -40,
      });
  }, []);

  return (
      <div className='sayhello container'>
        <div className='sayhello__container'>
          <div className='sayhello__img' ref={imgRef}>
            <img src={handshake} alt='handshake' />
          </div>
          <div className='sayhello__text'>
            <div className='sayhello__bio' ref={txtRef}>
              <h2>got work for me?</h2>
              <h3>
                you may have heard of my infectious awesomeness and want to say
                hello. you can find me here:
              </h3>
            </div>

            <div className='sayhello__resume' ref={resumeRef}>
              <a
                href='https://drive.google.com/file/d/1j84xgppUd3bbSQNtGXe-vjuKKP6_KkFC/view?usp=sharing'
                target='__blank'
              >
                <DescriptionSharpIcon /> <span>resume(dot)pdf</span>
              </a>
            </div>

            <div className='sayhello__links'>
              <div className='sayhello__email' ref={emailRef}>
                <a href='mailto:adekyte@gmail.com' target='__blank'>
                  <p>adekyte@gmail.com</p>
                </a>
              </div>

              <div className='sayhello__socials' ref={linksRef}>
                <a href='https://github.com/sambabib' target='__blank'>
                  <p>github</p>
                </a>
                <a
                  href='https://www.linkedin.com/in/emmanuel-akala-8768871b1/'
                  target='__blank'
                >
                  <p>linkedIn</p>
                </a>
                <a href='https://twitter.com/__kitts' target='__blank'>
                  <p>twitter</p>
                </a>
                <a href='https://www.instagram.com/__kitts/' target='__blank'>
                  <p>instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SayHello;
