import React from "react";
import "./Home.css";
import Img1 from "./Imgs/412CA1F2-D7EB-4770-85BB-7D2828ED8841.jpeg";
import Img2 from "./Imgs/4838DDAE-CE9A-438B-A820-1B30EDA6D826.jpeg";
import Img3 from "./Imgs/40594CDC-D830-4429-A6B0-E7A9401C6B91.jpeg";
import Img4 from "./Imgs/4.jpg";
import Img5 from "./Imgs/5.webp";
import Img6 from "./Imgs/6.jpg";
import bg1 from "./Imgs/bg1.gif";
import Mintbtn from "./mintbtn";
import os from "./Imgs/os.png";

export default function Home() {
  return (
    <div className="font">
      <div className="container-fluid home ">
        <div className="container-fluid navbgo ">
          <nav class="navbar container navbar-expand-lg navbar-dark navv">
            <div class="container-fluid">
              <a class="navbar-brand d-block " href="#">
                <img className="imghead_1 rounded" src={Img4}></img>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mob-navbar"
                aria-label="Toggle"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="mob-navbar">
                <ul class="navbar-nav mb-2 mb-lg-0 ">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#About">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Rd">
                      Road Map
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Team">
                      Team
                    </a>
                  </li>
                </ul>
                <form class="d-flex btnns">
                  <div class="social-buttons text-center">
                    <span class="neo-button px-2">
                      <a
                        href="https://discord.gg/kz6QMBVdA4
"
                        target="_blank"
                      >
                        <i class="buttons fab fa-discord  text-white"></i>
                      </a>
                    </span>
                    <span class="neo-button px-2">
                      <a
                        href="https://twitter.com/MutantMetaverse"
                        target="_blank"
                      >
                        <i class="fab fa-twitter "></i>
                      </a>
                    </span>
                    <span class="neo-button px-2">
                      <a
                        href="https://opensea.io/collection/cargyz"
                        target="_blank"
                      >
                        <img
                          src={os}
                          className="px-1"
                          style={{ width: "30px", marginTop: "-5px" }}
                        />
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div className="  imgb">
          <div className="overlay d-flex flex-column justify-content-center">
            <div className="text-center">
              <img className="imghead rounded" src={bg1}></img>
              <br />
              <br />
              {/* <h1 className=" centered text-white h1">Cash <span className='Tclr'>Crabs</span></h1> */}
              <h2 className="text-white">
                Pre-sale launch date:{" "}
                <span className="  Tclr">MARCH 29th 2022 (11PM EST)</span>{" "}
              </h2>
              <h4 className="text-white">
                Public launch date:{" "}
                <span className="  Tclr">MARCH 31th 2022 (11PM EST)</span>
              </h4>
            </div>
            <div className="text-center ">
              <br></br>
              {/* <button type="button" class="Wbtn btn btn-lg px-5 mb-5">CONNECT YOUR WALLET</button> */}
              {true ? <Mintbtn /> : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid Dis">
        <div className="container ">
          <br />
          <br />
          <a id="About"></a>
          <div className="row align-items-center py-5  px-md-5">
            {/* <div className="col-12 col-md-1 "></div> */}
            <div className="col-12 col-md-7 ">
              <h2 className=" text-white ">
                <span className="  Tclr"> WELCOME </span>
                To CARGYZ{" "}
              </h2>
              <p className="text-white">
                Introducing CARGYZ, a lighthearted celebration of the people
                that make the auto industry possible, uniquely portrayed in
                non-fungible tokens (NFT's). Everyday, millions of people around
                the world get up and go to work making our transportation needs
                possible. Little thought goes into the countless workers needed
                to make the auto industry function. The events of the last
                couple of years have really shown the true value of these
                tireless champions of the chariot.
              </p>
              <br />
            </div>
            <div className="col-12 col-md-5 ">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner  ">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 rounded pb-5"
                      src={Img1}
                      alt="First slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 rounded pb-5"
                      src={Img2}
                      alt="Second slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 rounded pb-5 "
                      src={Img3}
                      alt="Third slide"
                    ></img>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <br />
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
                <br />
              </div>
            </div>
            {/* <div className="col-12 col-md-1 "></div> */}
          </div>

          {/* <div className='container text-center py-3'>

                    <p className="text-white">
                                <h2>How  <span className='Tclr'>will </span> this work</h2>
                                A dashboard will be created to have all information about investments. Profits will be showed directly in the dashboard per week and per month. All our data will be 100% transparent with holders and non-holders.
                                Every 2 weeks % of profit will be air dropped into the holders wallet, only if they hold it for the current 2 weeks. If the nft was sold / purchased during these 2 weeks, they will have to wait for the new 2 weeks to start to get % of profit.

                                The 2nd collection will be another fund raise round showing our success and benefits to hold our first collection.

                            </p><br />
                    </div> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-white">
                It takes many hands to make our dream car possible, CARGYZ
                highlights the people that make it all possible. Rather then
                start at the beginning of the process, the first series starts
                at the end, the Dealership. Our 10,000 piece Series 1 collection
                will highlight the last link in a long chain of heroes. Most
                folks would not refer to car salespeople as heroes, in fact they
                would be more likely to use the opposite term, villain. Having
                spent over 25 years in the car business, I can tell you without
                hesitation there are many heroes amongst them. Unlike most jobs
                that allowed you to stay home during the pandemic and work,
                there’s no way to take a customer around the lot from your
                living room. No way to test drive from your home office. And no
                way to touch, feel and smell that new car from the kitchen
                table. You had to be there, right in the middle of all of it,
                with only your disposable mask for protection.<br></br>
                <br></br> Selling cars requires a commitment that few people
                could ever make. You rise up in the morning with no assurance
                that your days labor will yield any result. You wait patiently
                with your fellow salespeople for an opportunity to speak to a
                potential customer, never knowing when that encounter will
                happen. You can spend all day waiting, never getting a chance or
                perhaps just giving directions to the parts department.
                Sometimes your shift could end at 6pm, but if a customer rolls
                in at 5:45, you'll be there till 10pm. Most people want a car,
                so if they can buy one they usually will. I've often felt that
                you don't get paid to sell cars, you get paid to wait around to
                sell a car. Many enter the business seeking their fortunes not
                prepared for the mental challenges of time and rejection. The
                ones who navigate these slings and arrows are highlighted in the
                first series, "The Sales Department".<br></br>
                <br></br> Let's explore some of our endearing characters,
                whimsically illustrated by Italian artist and illustrator Mattia
                Tanieli. You can't have a Dealership without the "Owner". The
                owner is a special person, they have to keep the entire team
                pulling in one direction, up! Their title will be the rarest of
                the group, and should command much respect. The owner needs a
                right hand person to carry out the day to day supervision and
                success of the store, the General Manager handles that task. Not
                many weather the storm of sales long enough to reach that level,
                the GM is usually looking for their chance to own a store. The
                remaining Management spots go to Sales and Finance, it's hard to
                buy a car at a dealership and not meet these people. One handles
                the figures to buy the car and the other works on your bank loan
                or takes your cash. These managers typically work the longest
                hours in the store and endure the ups and downs that come with
                retail sales.<br></br>
                <br></br> The rest of the collection is dedicated to the
                salespeople, the backbone of the Dealership. Without them, no
                one would be there to help us navigate the selection and buying
                process. No one to demonstrate the features and benefits, and no
                one to test drive and see if it's the right fit for you. Next
                time you go to a lot and look at cars remember, theres a hero
                waiting to assist you.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-32aqIezT1w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <a id="Rd"></a>

        <div class="container">
          <h1 className="h1 text-white text-center mt-5">ROADMAP</h1>
          <br />
          <br />
          <h3 className="text-white text-center">
            <span className="  Tclr">
              So where are we going on these projects🤔
            </span>
          </h3>
          <br />
          <br />

          <div class="main-timeline">
            {/* <!-- start experience section--> */}
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <i class="fas fa-dice-one ia"></i>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <p class="description text-white">
                  It’s a long journey with many facets yet to come. The primary
                  goal of Series 1 is to give us a foothold in the Metaverse ♾.
                  We can’t have a community without a place to go. To achieve
                  that goal we want to acquire parcels in several virtual worlds
                  after the collection sells out.
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <i class="fas fa-dice-two ib"></i>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <p class="description text-white">
                  The second phase will involve construction 🏗 🚧 of CARGYZ
                  community gathering spaces. The auto industry can be tough, it
                  would be nice to hop into VR and have a place to go. CARGYZ
                  goal is to be that place, where all chariot champions can go
                  to rest their wheels. 😴🚙🚗🛻🚌
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <i class="fas fa-dice-three ic "></i>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <p class="description text-white">
                  As we transition into Series 2, the CARGYZ benevolence and
                  beyond initiatives can begin. These steps will be outlined on
                  a future date.
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <i class="fas fa-dice-four icm "></i>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <p class="description text-white">
                  There are many ways CARGYZ plans to meld into the Metaverse.
                  We are only just beginning the journey, come ride with us. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 
                <div className='container-fluid Timeline' >
                    <div class="container"><br /><br />
                        <h1 className='h1 text-white'>ROADMAP</h1><br /><br />
                        <div class="row ">
                            <div class="col-md-12">
                                <div class="main-timeline">
                                    <div class="timeline">
                                        <div class="timeline-icon "><i class="fas fa-dice-one"></i></div>
                                        <div class="timeline-content ">
                                            <h3 class="title text-white">Stage 1</h3>
                                            <p class="description text-white">
                                                Our website and the Mutant Soldiers collection goes live.
                                                NFT Reveal will happen 24h after the collection releases.
                                            </p>
                                        </div
                                    </div>
                                    <div class="timeline">
                                        <div class="timeline-icon"><i class="fas fa-dice-two"></i></div>
                                        <div class="timeline-content">
                                            <h3 class="title text-white">Stage 2</h3>
                                            <p class="description text-white">
                                                Holders gain access to the TradersSynergy financial group - an exclusive group of crypto and financial traders                                            </p>
                                        </div>
                                    </div>
                                    <div class="timeline">
                                        <div class="timeline-icon"><i class="fas fa-dice-three"></i></div>
                                        <div class="timeline-content">
                                            <h3 class="title text-white">Stage 3</h3>
                                            <p class="description text-white">
                                                Endless DAO releases - 80% of initial sales + 20% royalties added to treasury.
                                                Holders will be able to vote on the continuing development of the game and the expansion of the ecosystem.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="timeline">
                                        <div class="timeline-icon"><i class="fas fa-dice-four"></i></div>
                                        <div class="timeline-content">
                                            <h3 class="title text-white">Stage 4</h3>
                                            <p class="description text-white">
                                                Merchandise collection
                                            </p>
                                        </div>
                                    </div>
                                    <div class="timeline">
                                        <div class="timeline-icon"><i class="fas fa-dice-five"></i></div>
                                        <div class="timeline-content">
                                            <h3 class="title text-white">Stage 5</h3>
                                            <p class="description text-white">
                                                2nd NFT collection - to be revealed
                                                Whitelist for Mutant Soldiers holders
                                                The Endless Expanse is taken to the metaverse.
                                                Both NFT sets will have a metaverse space - the start of the interaction between them.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="timeline">
                                        <div class="timeline-icon"><i class="fas fa-dice-six"></i></div>
                                        <div class="timeline-content">
                                            <h3 class="title text-white">Stage 6</h3>
                                            <p class="description text-white">
                                                Game begins construction
                                                $ENDL begins development
                                                Internal economy takes shape
                                                First DAO voting takes place
                                            </p>
                                        </div>
                                    </div>
                                    <div class="timeline">
                                        <div class="timeline-icon"><i class="fas fa-dice-six"></i></div>
                                        <div class="timeline-content">
                                            <h3 class="title text-white">Stage 7</h3>
                                            <p class="description text-white">
                                                Beta release to token holders. Be careful, The Endless Expanse is brutal. Each successful combat will win you traits to empower your NFT further, but each defeat will lose them just the same.

                                                Do you have what it takes to conquer The Endless Expanse?


                                                $ENDL can be used for in-game purchases.
                                                Secondary marketplace for traits launches
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

        <a id="Team"></a>

        <div className="container  py-5 teamings">
          <h2 className="h1 text-white text-center pb-2 pt-5">
            Meet The <span className="  Tclr">Team</span>
          </h2>
          <div className="row">
            <div className="col-12 col-md-3 py-3">
              <div className=" w-100 ">
                <img
                  className="d-block w-100 rounded  "
                  src={Img1}
                  alt="First slide"
                ></img>
                <h3 className="text-white text-center pt-3">BK3 | Owner</h3>
                <p className="text-white text-center pt-3">
                  Project Creator/Manager{" "}
                </p>
              </div>
            </div>

            <div className="col-12 col-md-3 py-3">
              <div className=" w-100">
                <img
                  className="lop d-block w-100  rounded"
                  src={Img6}
                  alt="First slide"
                ></img>
                <h3 className="text-white text-center pt-3">
                  Chicky | General Manager
                </h3>
                <p className="text-white text-center pt-3">
                  Community Development/Planning
                </p>
              </div>
            </div>

            <div className="col-12 col-md-3 py-3">
              <div className=" w-100">
                <img
                  className="d-block w-100 rounded "
                  src={Img3}
                  alt="First slide"
                ></img>
                <h3 className="text-white text-center pt-3">
                  Mattia Tanieli | Creative Manager
                </h3>
                <p className="text-white text-center pt-3">
                  Illustrator/Artist{" "}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3 py-3">
              <a href="https://www.linkedin.com/in/sabirpro/">
                <div className="w-100">
                  <img
                    className="d-block w-100 rounded"
                    src={Img2}
                    alt="First slide"
                  ></img>
                  <h3 className="text-white text-center pt-3">Sabirpro</h3>
                  <p className="text-white text-center pt-3"> Developer</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container  py-5 teamimgs">
          {/* <h2 className='h1 text-white text-center pb-2 pt-5' >Meet The Team</h2> */}
          <div className="row"></div>
        </div>

        <div class="container">
          <div class="row py-5 ">
            <div class="col-md-12 border">
              <h2 className="h1 text-white text-center ">
                <span className="  Tclr">FAQ</span>`s
              </h2>
              <div
                class="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        WHY MINT A CARGYZ
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div class="panel-body ">
                      <p>
                        Minting a CARGYZ brings a new hero into the NFT world.
                        It also brings us another step closer to making the
                        CARGYZ Metaverse a reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        HOW MANY CARGYZ IN SERIES 1
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="panel-body">
                      <p>There will be a total of 10,000 CARGYZ in Series 1 </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        HOW MUCH IS ONE CARGYZ TO MINT
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="panel-body">
                      <p>
                        Each CARGYZ minted will be .07 ETH + GAS during the
                        Pre-Public launch. During the Public Launch each CARGYZ
                        minted will be .1 ETH + GAS.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingFour">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        HOW CAN I GET ON THE WHITELIST?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                  >
                    <div class="panel-body">
                      <p>
                        Preregistration is live and will end on 3.3.22 @ 11 pm
                        EST.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingFive">
                    <h4 class="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        WHEN DOES THE CARGYZ MINT GO LIVE
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFive"
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div class="panel-body ">
                      <p>
                        Pre-sale minting begins on 3.29.22 @ 11 pm EST (maximum
                        of 2500 tokens to mint). Public minting will begin on
                        3.31.22 @ 11 pm EST.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingFive">
                    <h4 class="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapsesix"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        IS THERE A LIMIT TO HOW MANY CARGYZ I CAN MINT
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapsesix"
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div class="panel-body ">
                      <p>There is a minting limit of 40 CARGYZ per wallet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <hr className="text-white"></hr>
        <div className="container text-center py-2 text-white  ">
          <p>
            <a href="https://discord.gg/kz6QMBVdA4" target="_blank">
              <i className="fab fa-discord Footer px-1"></i>
            </a>
            <a href="https://twitter.com/MutantMetaverse">
              <i className=" px-1 Footer fab fa-twitter"></i>
            </a>
            <a href="https://opensea.io/collection/cargyz">
              <img src={os} className="px-1" style={{ width: "25px" }} />
            </a>
            <span className="px-1 Footer">
              © 2022, <a href="/Privacy">PRIVACY POLICY</a>
            </span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
