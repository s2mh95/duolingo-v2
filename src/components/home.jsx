import { useState } from "react";
import { CircleFlag } from 'react-circle-flags'
import image1 from '../assets/1.png'
import { Link } from "react-router-dom";


const Home = () => {
    const FlagNations = {
        0: {
          flag: <CircleFlag countryCode="gb"/>,
          language: "ENGLISH"
        },
        1: {
          flag: <CircleFlag countryCode="fr"/>,
          language: "FRENCH"
        },
        2: {
          flag: <CircleFlag countryCode="de" />,
          language: "GERMAN"
        },
        3: {
          flag: <CircleFlag countryCode="it"/>,
          language: "ITALIAN"
        },
        4: {
          flag: <CircleFlag countryCode="jp"/>,
          language: "JAPANESE"
        },
        5: {
          flag: <CircleFlag countryCode="pt"/>,
          language: "PORTUGUESE"
        }
    };
    const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

    const HandleChangeLanguage = (language) => {
      setSelectedLanguage(language);
    };
    return(
        <>
            <header className="container mx-96 flex justify-between items-center p-4 w-auto font-custom">
                <div><svg width="179" height="42" viewBox="0 0 179 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.3594 19.7622C38.118 26.2177 34.1961 32.3076 28.0148 34.2725C21.8334 36.2375 15.1355 33.5235 12.0555 27.806C6.80378 28.0224 2.03485 24.9074 0.151875 20.1153C-0.0355183 19.6372 0.0167211 19.0978 0.292395 18.6644C0.568066 18.231 1.03386 17.9559 1.54536 17.9244L8.5501 17.4903L6.81109 11.9573C6.35173 10.4955 6.65383 8.89954 7.61558 7.707C8.57733 6.51449 10.0707 5.88421 11.5925 6.02852C15.3979 6.39217 17.925 6.37745 19.1737 5.98439C20.4225 5.59133 22.4657 4.17143 25.3034 1.72466C26.4651 0.724618 28.0496 0.376265 29.5208 0.797451C30.9921 1.21864 32.1533 2.35301 32.6116 3.81682L34.3329 9.30024L40.2256 5.67766C40.6627 5.40863 41.2016 5.36564 41.6752 5.56204C42.1488 5.75845 42.4998 6.17048 42.6192 6.67031C43.8037 11.6426 41.7173 16.8998 37.3594 19.7622ZM19.4363 37.6572L16.2393 36.1255C15.1209 35.6134 13.7988 36.0968 13.2706 37.2111C12.7423 38.3254 13.2036 39.6578 14.3064 40.203L17.5052 41.7338C18.6236 42.246 19.9458 41.7625 20.4741 40.6482C21.0023 39.5338 20.541 38.2014 19.4381 37.6563L19.4363 37.6572ZM41.7546 28.1652C41.2358 27.8701 40.6211 27.7943 40.0462 27.9545C39.4713 28.1148 38.9834 28.4979 38.6903 29.0192L36.9463 32.1119C36.3752 33.1914 36.7639 34.5298 37.8232 35.1319C38.8825 35.7339 40.2281 35.3811 40.8592 34.3358L42.6018 31.2427C43.2154 30.1574 42.8361 28.7797 41.7545 28.1651L41.7546 28.1652Z" fill="#58CC02"/><path d="M118.572 5.87061C117.055 5.87061 115.866 7.00047 115.866 8.4574C115.866 9.8846 117.055 11.0442 118.572 11.0442C120.029 11.0442 121.277 9.8846 121.277 8.4574C121.277 7.00047 120.029 5.87061 118.572 5.87061ZM65.9139 6.01927C64.1596 6.01927 62.0485 8.18981 62.0485 11.9659V14.1662C60.9484 13.3931 59.432 12.8579 57.7075 12.8579C53.0691 12.8579 49.8281 16.3962 49.8281 21.0346C49.8281 25.7325 53.0096 29.2113 57.7075 29.2113C60.0861 29.2113 62.108 28.1706 63.1189 26.9813C63.9515 28.2301 65.0813 28.9139 65.8841 28.9139C66.4491 28.9139 66.8059 28.5571 66.8059 27.8435V7.08967C66.8059 6.37607 66.4788 6.01927 65.9139 6.01927ZM111.673 6.01927C109.919 6.01927 107.808 8.18981 107.808 11.9659V27.0407C107.808 28.1409 108.224 28.6166 109.384 28.6166H110.99C112.149 28.6166 112.565 28.1409 112.565 27.0407V7.08967C112.565 6.37607 112.238 6.01927 111.673 6.01927ZM159.663 12.3525C159.395 12.3525 159.098 12.4417 158.712 12.6498C157.493 13.3039 156.809 13.4526 155.798 13.4526C154.281 13.4526 153.508 13.0066 150.892 13.0066C146.461 13.0066 143.637 15.6826 143.637 19.2803C143.637 21.0346 144.469 22.6105 145.986 23.8593C143.994 24.8702 142.804 27.1299 142.804 29.3599C142.804 33.4929 146.164 36.1986 151.13 36.1986C156.154 36.1986 159.455 33.4929 159.455 29.3599C159.455 27.1299 158.266 24.8405 156.273 23.8593C157.73 22.6105 158.622 21.0346 158.622 19.2803C158.622 18.537 158.474 17.8531 158.176 17.2287C159.841 16.6341 160.585 15.2961 160.585 13.6905C160.585 12.9174 160.317 12.3525 159.663 12.3525ZM96.6581 12.8579C91.8413 12.8579 88.2139 16.2475 88.2139 21.0346C88.2139 25.7622 91.8413 29.2113 96.6581 29.2113C101.475 29.2113 105.102 25.7622 105.102 21.0346C105.102 16.2475 101.475 12.8579 96.6581 12.8579ZM133.379 12.8579C131.476 12.8579 129.484 13.6607 128.235 15.1474C127.402 13.8391 126.272 13.1553 125.44 13.1553C124.875 13.1553 124.518 13.5121 124.518 14.2257V27.0407C124.518 28.1409 124.935 28.6166 126.094 28.6166H127.7C128.859 28.6166 129.276 28.1409 129.276 27.0407V21.4509C129.276 20.0831 129.603 19.0722 130.168 18.4181C130.762 17.7342 131.654 17.3774 132.665 17.3774C133.736 17.3774 134.538 17.7342 135.074 18.4181C135.579 19.0722 135.817 20.0534 135.817 21.4806V27.0407C135.817 28.2003 136.293 28.6166 137.393 28.6166H138.998C140.099 28.6166 140.574 28.2003 140.574 27.0407V21.3319C140.574 18.3289 139.98 16.4854 138.761 15.0582C137.541 13.6607 135.698 12.8579 133.379 12.8579ZM169.772 12.8579C164.956 12.8579 161.328 16.2475 161.328 21.0346C161.328 25.7622 164.956 29.2113 169.772 29.2113C174.589 29.2113 178.217 25.7622 178.217 21.0346C178.217 16.2475 174.589 12.8579 169.772 12.8579ZM84.2296 13.4526H82.624C81.4644 13.4526 81.0481 13.9283 81.0481 15.0285V20.5589C81.0481 22.0753 80.7508 23.0862 80.1561 23.7403C79.6209 24.335 78.7884 24.6918 77.8666 24.6918C76.9449 24.6918 76.2313 24.3945 75.7259 23.8593C75.1015 23.2051 74.8041 22.2239 74.8041 20.4102V15.0285C74.8041 13.8689 74.3284 13.4526 73.2283 13.4526H71.6227C70.5225 13.4526 70.0468 13.8689 70.0468 15.0285V20.8562C70.0468 23.889 70.7901 26.0001 72.2173 27.3678C73.4067 28.4977 75.042 29.2113 77.0936 29.2113C79.1452 29.2113 80.9292 28.349 82.1185 26.9515C82.9511 28.2301 84.0809 28.9139 84.8837 28.9139C85.4487 28.9139 85.8055 28.5571 85.8055 27.8435V15.0285C85.8055 13.9283 85.3892 13.4526 84.2296 13.4526ZM119.374 13.4526H117.769C116.669 13.4526 116.193 13.8689 116.193 15.0285V27.0407C116.193 28.2003 116.669 28.6166 117.769 28.6166H119.374C120.475 28.6166 120.95 28.2003 120.95 27.0407V15.0285C120.95 13.8689 120.475 13.4526 119.374 13.4526ZM151.13 16.753C152.884 16.753 154.043 17.8829 154.043 19.5479C154.043 21.0941 152.765 22.3429 151.13 22.3429C149.524 22.3429 148.216 21.0941 148.216 19.5479C148.216 17.8829 149.405 16.753 151.13 16.753ZM58.3616 24.9297C56.2803 24.9297 54.6449 23.3835 54.6449 21.0346C54.6449 18.6857 56.2803 17.1395 58.3616 17.1395C60.4132 17.1395 62.0485 18.6857 62.0485 21.0346C62.0485 23.3835 60.4132 24.9297 58.3616 24.9297ZM96.6581 24.9297C94.4281 24.9297 93.0306 23.2943 93.0306 21.0346C93.0306 18.7749 94.4281 17.1395 96.6581 17.1395C98.8881 17.1395 100.286 18.7749 100.286 21.0346C100.286 23.2943 98.8881 24.9297 96.6581 24.9297ZM169.772 24.9297C167.542 24.9297 166.145 23.2943 166.145 21.0346C166.145 18.7749 167.542 17.1395 169.772 17.1395C172.002 17.1395 173.4 18.7749 173.4 21.0346C173.4 23.2943 172.002 24.9297 169.772 24.9297ZM151.13 32.3333C149.048 32.3333 147.502 30.9655 147.502 29.2113C147.502 27.3381 148.929 26.0893 151.13 26.0893C153.33 26.0893 154.757 27.3678 154.757 29.2113C154.757 30.9358 153.181 32.3333 151.13 32.3333Z" fill="#58CC02"/></svg></div>
                <div className="relative group">
                    <div className="flex text-md text-sm text-gray-400 group-hover:text-gray-300 mx-1">
                        SITE LANGUAGE: {selectedLanguage}
                        <img className="mx-1" alt="" src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg" />
                    </div>
                    <div className="absolute top-0 right-0  my-5 container  hidden group-hover:block py-3 w-96">
                        <div className=" absolute top-0 right-36 w-4 h-4 border-t-2 border-l-2 rotate-45 bg-white my-1"></div>
                        <div className="container flex flex-wrap justify-between border-2 shadow-lg max-w- rounded-lg p-2">
                            {Object.keys(FlagNations).map((nation) => (
                                <div
                                key={nation}
                                className="flex w-1/2 py-1 px-3 rounded-md hover:bg-gray-200 text-sm"
                                onClick={() => HandleChangeLanguage(FlagNations[nation].language)}
                                >
                                    <div className=" flex h-8">{FlagNations[nation].flag}</div>
                                    {FlagNations[nation].language}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mx-96 mt-16 flex items-center p-4 w-auto font-custom">
                <img src={image1} alt="" className=" w-1/2 py-36 ml-16 " />
                <div className="container items-center flex flex-col">
                    <h2 className=" text-3xl text-center">The free, fun, and effective way to learn a language!</h2>
                    <Link to="lessons">
                        <button className=" w-80 h-12 rounded-2xl mt-10 text-sm text-white bg-green-500 shadow-lg shadow-green-700 hover:bg-green-400" >
                            GET STARTED
                        </button>
                    </Link>
                    <Link to="lessons">
                        <button className=" w-80 h-12 rounded-2xl mt-5 border-2 text-blue-400 text-sm shadow-lg hover:bg-gray-200">
                            I ALREADY HAVE AN ACCOUNT
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Home;