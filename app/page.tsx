import About_me from "./components/About_me";
import ContactMe from "./components/ContactMe";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div style={{backgroundColor:'#040d09',color:'white'}} className="w-full xl:w-1/2 lg:w-2/3 justify-self-center">
      <div className="">
        <Header/>
        <About_me/>
        <Projects/>
        {/* <Experience/> */}
        <Skills/>
        <ContactMe/>
      </div>
        <Footer/>
  </div>
  );
}
