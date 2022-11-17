import Head from 'next/head'
import Image from 'next/image'
import React, {useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, CarouselContext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import IframePlayer from 'player-iframe-video'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {

  const iFrame = <iframe width="100%" height="100%"
                          src="https://player.vimeo.com/video/767676233?h=b2086adb80&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="test player iframe vimeo" />

    
    const [isOpened, setIsOpened] = useState(false);
    
    function toggleVideoCont() {
      setIsOpened(wasOpened => !wasOpened);
    }

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });


    // Carousel setting
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };



  return (
    <div className="">
      <Head>
        <title>Abdulhamid - Gulf War</title>
        <meta name="description" content="Abdulhamid - A soldier in the Gulf War" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="header">
        <ul className="header-list">
          <motion.li
            className="item logo"
            animate={{x: 0}}
            initial={{x: -200}}
            transition={{ delay: 0.2, x: {duration: 0.8}, default: {ease: "linear"} }}
            >
              <Image
                src="/Logo.svg"
                height= {77}
                width= {322}
                className="w-100"
                alt="Project by Potoo Studio"
              />
          </motion.li>
          <li>
            <motion.div className="progress-bar" style={{ scaleX }}/>
          </li>
        </ul>
      </header>

      {/* Main Container */}
      <main className="main-container">
        {isOpened && (
          <div className="videoCont" onClick={toggleVideoCont}>
            <span className="exit"></span>
            <div className="video-wrapper">
              <div className="video-row">
                <div className="video-box">
                  <IframePlayer id={"iframe-vimeo-player-test"} iFrame={iFrame} />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container-fluid main-bg">
          <div className="row justify-content-center title-row-top">
            <div className="col-md-9 col-10">
              <motion.h1
                className="title"
                animate={{y: 0, opacity: 1}}
                initial={{y: 75, opacity: 0}}
                transition={{ delay: 0.6, y: {duration: 0.8}, default: {ease: "linear"} }}
              >
                a Soldier <span className="and">and</span> a Friend
              </motion.h1>
            </div>
          </div>
          <motion.div
            className="video-btn-cont"
            animate={{y: 0, opacity: 1}}
            initial={{y: 100, opacity: 0}}
            transition={{ delay: 0.8, y: {duration: 0.8}, default: {ease: "linear"} }}>
            <button className="video-btn" style={{cursor: 'pointer'}} onClick={toggleVideoCont}>
              - watch Story -
            </button>
          </motion.div>
        </div>
        <div className="container-fluid pt-5">
          <div className="row px-md-5 mx-md-5 justify-content-center">
            <span className="light-bg"></span>
            <div className="col-md-9 col-12">
              <motion.h1
                className="sec-title"
                whileInView= {{opacity: 0.15}}
                transition={{
                  opacity: { duration: 2, repeat: 0},
                }}
                initial={{opacity: 1}}
              >
                story
              </motion.h1>
            </div>
          </div>
          <div className="row justify-content-around pt-md-5 pt-4 mr-3">
            <div className="col-11">
              <motion.ul className="copy-list list"
                whileInView= {{y: 0}}
                transition={{
                  y: { duration: 1.2, repeat: 0, delay: 0.2},
                }}
                initial={{y: 60}}
              >
                <li className="copy-item item"
                 >
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={50}
                  totalSlides={10}
                  touchEnabled={true}
                  dragEnabled={true}
                >
                  <Slider>
                    <Slide index={0}>
                      <div className="row cursor-drag">
                       <div className="col-11">
                        <p className="num">
                            1.0
                        </p>
                        <h3 className="copy-title">
                          The Life of Hamid <span className="small-text float-right">1978</span>
                        </h3>
                       </div>
                       <div className="col-11">
                         <p className="copy-text pt-4">
                          His youth was spent with 4 brothers and a sister in
                          the Marshlands of Southern Iraq, the land of the
                          tall green reed, the curved horns water buffalos, and
                          the winter visitors of migratory birds.
                         </p>
                         <p className="copy-text pt-2">
                          The shiest boy in the school picture was also the
                          shiest in life.
                         </p>
                         <p className="copy-text pt-2">
                          A Sibha in hand, was the clue to spot <span className="italic">Hamid </span>
                           from many. His love of Sibha grew into a collection. <br/>
                          <span className="small-text"> Sibha is used culturally to reduce stress or as an indication of status in society</span>
                         </p>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              1.1
                          </p>
                          <h3 className="copy-title">
                            Iran–Iraq War <span className="small-text float-right">1980</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                            As he turned 18, the quiet Marshes nights began
                            to have a strange sound, the sound of war.
                            </p>
                          <p className="copy-text pt-2">
                            The scent of the war displaced the odor of the
                            Marshes. The Marshlands were no more a stop for
                            bird migration.
                          </p>
                          <p className="copy-text text-center pt-2">
                            The sense of peace was gone
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={2} className="cursor-drag">
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              1.2
                          </p>
                          <h3 className="copy-title">
                            Iran–Iraq War <span className="small-text float-right">1988</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                           <span className="italic">Hamid</span> and his 4 brothers were drafted to an 8
                            years war between Iraq and Iran.
                          </p>
                          <p className="copy-text text-center pt-2">
                           <span className="italic">Hamid’s</span> mother <span className="italic">“Shareefa”</span> vowed she shall
                            wear a white dress if her 5 sons returned
                            home from the war.
                          </p>
                          <p className="copy-text pt-2">
                            8 years later, August 20<sup>th</sup> <br />
                          <span className="italic">Mother Shareefa</span> welcomed her 5 sons wearing white.
                          </p>
                          <p className="copy-text text-center pt-2">
                            - The war was over -
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              1.3
                          </p>
                          <h3 className="copy-title">
                            Gulf War <span className="small-text float-right">1990</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                            The 8 years of war were as hard on the Iraqi
                            economy as <span className="itlaic">Mother Shareefa</span> on her 5 sons.
                          </p>
                          <p className="copy-text pt-2">
                            -July 17<sup>th</sup> <br />
                            <span className="italic">Saddam Hussein</span> launched a televised verbal
                            attack on Kuwait for a list of breaking the
                            rules of OPEC, <br/> <span className="small-text">The Organization of the Petroleum Exporting Countries.</span>
                          </p>
                          <p className="copy-text pt-2">
                            -August 2<sup>nd</sup> <br />
                            Saddam ordered the Iraqi armoured divisions
                            to invade Kuwait.
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              1.3
                          </p>
                          <h3 className="copy-title">
                            Gulf War <span className="small-text float-right">1990</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4 text-center">
                            <s>The war was over</s>
                          </p>
                          <p className="copy-text pt-2 text-center">
                            <span className="italic">Mother Shareefa</span> questioned her vow, as she
                            watched her 5 sons re-drafted into another war.
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              2.0
                          </p>
                          <h3 className="copy-title">
                            Hamid and Najlaa <span className="small-text float-right">1990</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                            -Three months into the war <br/>
                            And with an army bonus pay of “5000 Iraqi Dinar”
                            and his family’s strong encouragement, <span className="italic">Hamid </span>
                            married <span className="italic">Najlaa</span>, a young lady at the age of 19
                            years, on November 2<sup>nd</sup>.
                          </p>
                          <p className="copy-text pt-2">
                            After 3 days of marriage, <span className="italic">Hamid</span> was shipped off
                            to the war.
                          </p>
                          <p className="copy-text pt-2 text-center">
                            He arrived in his brother’s uniform
                            with his wedding suit packed away.
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              2.1
                          </p>
                          <h3 className="copy-title">
                          Gulf War <span className="small-text">again</span> <span className="small-text float-right">1991</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                            -January 15<sup>th</sup> <br/>
                            With <span className="italic">Saddam Hussein</span> ignoring the deadline set by
                            the UN, a military coalition of 35 nations
                            launched Operation Desert Storm on January 17<sup>th</sup>.
                          </p>
                          <p className="copy-text pt-2">
                            -February 26<sup>th</sup> <br/>
                            Iraq announced it was withdrawing its forces from
                            Kuwait. However, still refused to accept all the
                            UN resolutions passed against it.
                          </p>
                          <p className="copy-text pt-2 text-center">
                            - Another war was over -
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              2.2
                          </p>
                          <h3 className="copy-title">
                            Highway of Death <span className="small-text float-right">1991</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                            After hearing the withdrawal news. <span className="italic">Hamid</span> and his
                            close friend <span className="italic">Naif &nbsp;</span>headed back north to Iraq with
                            the Iraqi 10th Armoured division.
                          </p>
                          <p className="copy-text pt-2">
                            -Nighttime, February 26<sup>th</sup> <br />
                            Coalition air strikes targeted them for 2 nights as
                            they left Kuwait along highway 80, which was then named <br/>
                            <span className="underline italic bold"> Highway of Death</span>,
                            <span className="small-text"> Referring to the high number of casualties.</span>
                          </p>
                          <p className="copy-text pt-2 text-center">
                            <s>Another war was over</s>
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              2.3
                          </p>
                          <h3 className="copy-title">
                            Hamid and Naif <span className="small-text float-right">1991</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                            <span className="italic">Naif &nbsp;</span>was injured in one of the air attacks. While
                            everyone was looking for shelter. <span className="italic">Hamid</span> carried <span className="italic">Naif &nbsp;</span>
                            on his right shoulder and walked to a rusty oil pipe.
                          </p>
                          <p className="copy-text pt-2">
                            Halfway there, an air attack killed both men.
                          </p>
                        </div>
                        </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="row">
                        <div className="col-11">
                          <p className="num">
                              3.0
                          </p>
                          <h3 className="copy-title">
                            <span className="small-text">and</span> A Friend <span className="small-text float-right">1991</span>
                          </h3>
                        </div>
                        <div className="col-11">
                          <p className="copy-text pt-4">
                            -Two months later <br/>
                            And after searching 17 graves, <span className="italic">Hamid’s</span> brothers 
                            <span className="italic"> Mardan</span>, <span className="italic">Sharwan</span>, and <span className="italic">Shakir</span> found him in a shallow
                            grave next to <span className="italic">Naif</span>.
                          </p>
                          <p className="copy-text pt-2">
                            -Four months later <br/>
                            <span className="italic">Najlaa</span> gave birth to a boy named <span className="italic">Ahmed</span> on August 24<sup>th</sup>
                          </p>
                          <p className="copy-text pt-2">
                            <span className="italic">War</span> made a friend of <span className="italic">Hamid &nbsp;</span>but stopped him from
                            standing as a father.
                          </p>
                          <p className="copy-text pt-2">
                            Neither <span className="italic">Hamid</span> nor his son <span className="italic">Ahmed &nbsp;</span>had the chance to see
                            one another ever.
                          </p>
                        </div>
                        </div>
                    </Slide>
                  </Slider>
                  <ButtonBack className="carousel-btn back"
                   >
                    Prev
                  </ButtonBack>
                  <ButtonNext className="carousel-btn next">
                    Next
                    </ButtonNext>
                </CarouselProvider>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5 mt-md-5">
          <div className="row mt-md-5 px-md-5 mx-md-5 justify-content-center">
            <div className="col-md-9 col-11">
              <motion.h1
              className="sec-title album"
              whileInView= {{x: 0}}
              transition={{
                x: { duration: 1.2, repeat: 0,},
              }}
              initial={{x: -100}}
              >
                Album
              </motion.h1>
            </div>
          </div>
          <div className="row justify-content-around pt-md-5 pt-4 mr-3">
            <div className="col-11">
              <motion.ul className="copy-list list"
              whileInView= {{y: 0}}
              transition={{
                y: { duration: 1.2, repeat: 0, delay: 0.2},
              }}
              initial={{y: 60}}
              >
                <li className="copy-item item">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={50}
                  totalSlides={11}
                  currentSlide={null}
                >
                  <Slider>
                    <Slide index={0} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                          <p className="img-title">Hamid (bottom right)</p>
                          <Image
                            src="/group-photo.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={1} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (Iran-Iraq War)</p>
                          <Image
                            src="/Army-Picture.jpg"
                            layout="fill"
                            className="image mh-500"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={2} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (top right), Shakir (top center)</p>
                          <Image
                            src="/Pic-with-Friends.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                       </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={3} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (Gulf War)</p>
                          <Image
                            src="/Hamid-in-War.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={4} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (left), Shakir (center), Mardan (right)</p>
                          <Image
                            src="/Pic-with-Mardan.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={5} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                          <p className="img-title">Hamid (right) with his father Kamil</p>
                          <Image
                            src="/Picture-with-Kamil.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={6} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (3rd from top right)</p>
                          <Image
                            src="/School-Picture.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={7} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (left)</p>
                          <Image
                            src="/Abdulhamid-2.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={8} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (1990)</p>
                          <Image
                            src="/Abdulhamid-1.jpg"
                            layout="fill"
                            className="image mh-500"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={9} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (right)</p>
                          <Image
                            src="/Abdulhamid-3.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                    <Slide index={10} className="picture-slider-item">
                      <div className="row">
                       <div className="col-11">
                        <div className="image-container">
                        <p className="img-title">Hamid (1990)</p>
                          <Image
                            src="/Abdulhamid-4.jpg"
                            layout="fill"
                            className="image"
                            alt="Abdulhamid Pictures"
                            />
                        </div>
                       </div>
                      </div>
                    </Slide>
                  </Slider>
                  <ButtonBack className="carousel-btn back">
                    Prev
                  </ButtonBack>
                  <ButtonNext className="carousel-btn next">
                    Next
                  </ButtonNext>
                </CarouselProvider>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-md-5 pt-4 mt-md-10p">
          <div className="row px-md-5 mx-md-5 justify-content-md-around justify-content-center pt-0 mt-2">
            <div className="col-md-5 col-10 pb-md-0 pt-md-5 mt-md-5">
              <h1 className="trip-title">
                My trip home with a
                stop to explore the past
              </h1>
            </div>
            <div className="col-md-5 col-10 items-bottom pt-4 pt-md-5 mt-md-5">
              <ul className="trip-list list">
                <li className="item text-md-center text-left">
                  Denver
                </li>
                <li className="item line text-center">
                  <motion.span className="line-location"
                   whileInView= {{left: '94%'}}
                   transition={{
                     left: { duration: 2, repeat: 0, delay: 0.8},
                   }}
                   initial={{left: '0%'}}
                  >
                    &#x2022;
                    </motion.span>
                </li>
                <li className="item text-md-center text-right">
                  Baghdad
                </li>
              </ul>
            </div>
            <motion.div
              className="col-md-11 col-10 pr-md-5 px-0 mt-4 lighter-bg cursor-grab"
              whileInView= {{y: 0}}
              transition={{
                y: { duration: 1.2, repeat: 0, delay: 0.2},
              }}
              initial={{y: 60}}
              >
              <Carousel
                  swipeable={true}
                  slidesToSlide={1}
                  draggable={true}
                  responsive={responsive}
                  ssr={false} // means to render carousel on server-side.
                  infinite={true}
                  // minimumTouchDrag={50}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  // autoPlaySpeed={1000}
                  partialVisible={true}
                  keyBoardControl={true}
                  // customTransition="all .5"
                  // transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  itemClass=" p-4 cursor-grab"
                  focusOnSelect={true}
                  >
                    <div className="container">
                      <div className="image-container">
                        <Image
                          src="/Ticket.jpg"
                          loading='lazy'
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          draggable="false"
                          />
                      </div>
                      <p className="image-title pt-2">
                        Denver <span className="date">7.18.2022</span>
                      </p>
                     </div>
                    <div className="container">
                      <div className="image-container pt-md-5 mt-md-5">
                        <Image
                          src="/Tea.jpg"
                          loading='lazy'
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          draggable="false"
                          />
                      </div>
                      <p className="image-title pt-2">
                        Istanbul <span className="date">7.20.2022</span>
                      </p>
                     </div>
                    <div className="container">
                      <div className="image-container">
                        <Image
                          src="/Hamid-pictures.jpg"
                          loading='lazy'
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          draggable="false"
                          />
                      </div>
                        <p className="image-title pt-2">
                        Baghdad <span className="date">7.24.2022</span>
                        </p>
                     </div>
                    <div className="container">
                      <div className="image-container mt-md-5 pt-md-5">
                        <Image
                          src="/Coffee.jpg"
                          loading='lazy'
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          draggable="false"
                          />
                      </div>
                      <p className="image-title pt-2">
                        Baghdad <span className="date">7.26.2022</span>
                      </p>
                    </div>
                    <div className="container">
                      <div className="image-container">
                        <Image
                          src="/Story-on-table.jpg"
                          loading='lazy'
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          draggable="false"
                          />
                      </div>
                      <p className="image-title pt-2">
                      Baghdad <span className="date">7.28.2022</span>
                      </p>
                    </div>
                    <div className="container">
                      <div className="image-container">
                        <Image
                          src="/laptop.jpg"
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          />
                      </div>
                      <p className="image-title pt-2">
                      Baghdad <span className="date">8.10.2022</span>
                      </p>
                    </div>
                    <div className="container">
                      <div className="image-container">
                        <Image
                          src="/Hamid-letter.jpg"
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          />
                      </div>
                      <p className="image-title pt-2">
                        Baghdad <span className="date">8.12.2022</span>
                      </p>
                    </div>
                    <div className="container">
                      <div className="image-container">
                        <Image
                          src="/Turkish-chai.jpg"
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          />
                      </div>
                      <p className="image-title pt-2">
                        Istanbul <span className="date">8.19.2022</span>
                      </p>
                    </div>
                    <div className="container">
                      <div className="image-container pt-md-5 mt-md-5">
                        <Image
                          src="/Late-work.jpg"
                          loading='lazy'
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          />
                      </div>
                      <p className="image-title pt-2">
                      Denver <span className="date">8.24.2022</span>
                      </p>
                    </div>
                    <div className="container">
                      <div className="image-container">
                        <Image
                          src="/Laptop-Denver.jpg"
                          loading='lazy'
                          layout="fill"
                          className="image"
                          alt="Journey Pictures"
                          />
                      </div>
                        <p className="image-title pt-2">
                        Denver <span className="date">9.26.2022</span>
                        </p>
                    </div>
                </Carousel>
            </motion.div>
          </div>
        </div>
        <div className="container-fluid pt-5 mt-md-20p pb-5 mb-5">
          <div className="row py-5 my-5 justify-content-around">
            <div className="col-md-3 col-8 p-4">
              <motion.div
              className="image-container"
              whileInView= {{rotate: 365}}
                transition={{
                  rotate: { duration: 6, repeat: 0, delay: 0.1},
                }}
                initial={{rotate: 280}}
              >
                <Image
                  src="/Names-years-lime.svg"
                  layout="fill"
                  className="image"
                  alt="Abdulhamid Pictures"
                  />
              </motion.div>
            </div>
            <div className="col-md-7 col-10 px-0 text-center">
              <motion.div
              className="image-container"
               whileInView= {{scale: 1}}
               transition={{
                 scale: { duration: 3, repeat: 0, delay: 0.1},
               }}
               initial={{scale: 0.75}}>
                <Image
                  src="/Arabic-abdulhamid.svg"
                  layout="fill"
                  className="image"
                  alt="Abdulhamid Pictures"
                  />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-lighter py-5 mt-md-20p mt-40p">
          <div className="row pt-md-5 pb-lg-0  py-md-5 justify-content-md-around justify-content-center mx-md-5 mx-0 px-md-5 px-0">
            <div className="col-md-2 col-7 pt-md-4 py-3 py-md-0">
              <motion.p
                className="war-year my-0"
                whileInView= {{letterSpacing: '3.5em'}}
                transition={{
                  letterSpacing: { duration: 1, repeat: 0, delay: 0.2},
                }}
                initial={{letterSpacing: '0'}}
                >
                  1980
              </motion.p>
              <div className="image-container py-md-3">
                <Image
                    src="/Iran-Iraq-War.svg"
                    layout="fill"
                    className="image "
                    alt="Iran Iraq War"
                  />
              </div>
              <motion.p
                className="war-year my-0"
                whileInView= {{letterSpacing: '3.5em'}}
                transition={{
                  letterSpacing: { duration: 1, repeat: 0, delay: 0.3},
                }}
                initial={{letterSpacing: '0'}}
                >
                  1988
              </motion.p>
            </div>
            <div className="col-md-2 col-7 py-3 py-md-0">
              <div className="image-container">
                <Image
                  src="/AU.svg"
                  layout="fill"
                  className="image"
                  alt="Abdulhamid Logo"
                />
              </div>
              <p className="au py-2 text-center">
                  <motion.span
                    className="underline-letter"
                    whileInView= {{textDecoration: 'underline'}}
                    transition={{
                      textDecoration: { duration: 1.4, repeat: 0, delay: 0.8},
                    }}
                    initial={{textDecoration: 'none'}}
                  >
                  A</motion.span>bd
                  <motion.span
                    className="underline-letter"
                    whileInView= {{textDecoration: 'underline'}}
                    transition={{
                      textDecoration: { duration: 1.4, repeat: 0, delay: 0.8},
                    }}
                    initial={{textDecoration: 'none'}}
                  >
                  u</motion.span>lhamid
              </p>
            </div>
            <div className="col-md-2 col-7 pt-md-4 py-3 py-md-0">
              <motion.p
                className="war-year my-0"
                whileInView= {{letterSpacing: '3.5em'}}
                transition={{
                  letterSpacing: { duration: 1, repeat: 0, delay: 0.2},
                }}
                initial={{letterSpacing: '0'}}
                >
                  1990
              </motion.p>
              <div className="image-container">
                <Image
                    src="/The-Gulf-War.svg"
                    layout="fill"
                    className="image py-md-3"
                    alt="The Gulf War"
                  />
              </div>
              <motion.p
                className="war-year my-0"
                whileInView= {{letterSpacing: '3.5em'}}
                transition={{
                  letterSpacing: { duration: 1, repeat: 0, delay: 0.3},
                }}
                initial={{letterSpacing: '0'}}
                >
                  1991
              </motion.p>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5 mt-5 mt-md-10p mb-md-5 pb-md-5">
          <div className="row py-5 mt-5">
            <div className="col-12 px-0 text-center pt-5 mt-5">
              <h1 className="influence-h1  mt-5">
                Project made under the influence of
              </h1>
              <motion.ul
                className="list influence-list pt-3"
                whileInView= {{y: 0}}
                transition={{
                  y: { duration: 1.2, repeat: 0, delay: 0.2},
                }}
                initial={{y: 50}}
                >
                <li className="item">
                  Oud Music
                </li>
                <li className="item">
                  Tea (Chai)
                </li>
                <li className="item">
                  Traveling
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5 mt-5 mb-md-5 pb-md-5">
          <div className="row pt-5 mt-5 justify-content-center mb-md-5 pb-md-5">
           <motion.div
            className="col-md-3 col-10 pt-md-5 mt-5"
            whileInView= {{x: 0}}
            transition={{
              x: { duration: 1.2, repeat: 0, delay: 0.4},
            }}
            initial={{x: -50}}
          >
              <ul className="list-project-info list px-md-5 pt-5 mt-5">
                 <span className="bb">Photographic</span>

                 <li className="item pt-md-3 pt-2">
                  Alamy
                 </li>
                 <li className="item">
                  The Guardian
                 </li>
                 <li className="item">
                  Iraqi Archive
                 </li>
                 <li className="item">
                  Hamid’s Family
                 </li>
              </ul>
           </motion.div>
           <motion.div
           className="col-md-3 col-10 pt-md-5 mt-md-5"
           whileInView= {{x: 0}}
            transition={{
              x: { duration: 1.2, repeat: 0, delay: 0.4},
            }}
            initial={{x: 50}}
           >
              <ul className="list-project-info list text-right px-md-5 pt-md-5 mt-md-5 pt-3">
                <span className="bb">Oud Music</span>

                 <li className="item pt-md-3 pt-2">
                  Ido Romano
                 </li>
              </ul>
           </motion.div>
          </div>
        </div>
        <div className="container-fluid pt-5 mt-5">
          <div className="row pt-5 mt-5 justify-content-center">
           <div className="col-md-6 col-11">
             <h1 className="tell-story-h1 text-center pt-5 mt-5">
              Let us tell your
              <motion.span
              className="stor"
              whileInView= {{fontWeight: 700}}
              transition={{
                fontWeight: { duration: 0.8, repeat: 0, delay: 0.4},
              }}
              initial={{fontWeight: 400}}
              > story
              </motion.span>
             </h1>
           </div>
          </div>
        </div>
        <div className="container-fluid pt-5 mt-5 pb-5 mb-5">
          <div className="row pt-5 mt-5 pb-5 mb-5 justify-content-center">
           <div className="col-md-3 col-7">
            <div className="image-container">
                <Image
                  src="/potoo-logo.svg"
                  layout="fill"
                  className="image pt-5 mt-5"
                  alt="Potoo logo"
                  />
              </div>
           </div>
           <div className="col-10 pt-md-4 pt-3">
             <p className="website text-center">
               <Link className="link" href="https://potoo.studio">potoo.studio</Link>
             </p>
           </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="footer">
        
      </footer>
    </div>
  )
}
export default Home;