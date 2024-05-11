import Footer from "../components/footer";
import LandingComponent from "../components/landing-section";
import NavBar from "../components/nav-bar";
import SpeakerList from "../components/speaker/speaker-list";
import SponserList from "../components/sponsers/sponser-list";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between mx-auto container gap-10 px-5"
      style={{ scrollbarWidth: "none" }}
    >
      <NavBar />
      <LandingComponent />
      <SpeakerList />
      <SponserList />
      <Footer />
    </main>
  );
}
