import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-flex m-3 bg-white rounded-1">
      {/* Navbar */}
      <Navbar />
      {/* <!-- Intro --> */}
      <div className="d-flex mx-auto m-5" style={{ maxWidth: "600px" }}>
        <div>
          <Image
            src="/gupone.png"
            alt="gupong.png"
            width="800px"
            height="800px"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
        </div>
        <div className="m-3">
          <h3>Charttrakarn Choosiri</h3>
          <p>
            My name is Charttrakarn. I&apos;m Computer Engineer student at
            Faculty of Engineer, Chiang Mai University. Just an ordinary Thai
            dude who&apos;s interest in computer technology and 21st century
            arts and media in any shape or form.
          </p>
        </div>
      </div>

      {/* <!-- Content --> */}
      <div className="h-flex">
        <span className="d-flex w-100 justify-content-center">
          <h3>Interest</h3>
        </span>
        {/* <!-- Container --> */}
        <div className="d-flex m-2">
          <div className="flex-shrink-0">
            <Image
              src="/coding.webp"
              alt="coding.webp"
              width="100px"
              height="100px"
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5>Programming</h5>
            <p>
              The tools that use in study computer tech. Language that I can
              write is Python,C++,Java.
            </p>
          </div>
        </div>
        {/* <!-- Container --> */}
        <div className="d-flex m-2">
          <div className="flex-shrink-0">
            <Image src="/tux.png" alt="tux.png" width="100px" height="100px" />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5>GNU/Linux</h5>
            <p>
              &quot;It&apos;s just werk&quot; &quot;memeOS&quot; The Operating
              System that I use in my 8 years old laptop. Not that I have the
              money to buy Windows but I really like the concept and community
              that using it plus tinker it alot help you learn more or less
              about machine that you use.
            </p>
          </div>
        </div>
        {/* <!-- Container --> */}
        <div className="d-flex m-2">
          <div className="flex-shrink-0">
            <Image
              src="/pepe2.webp"
              alt="pepe2.webp"
              width="100px"
              height="100px"
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5>Internet</h5>
            <p>
              A fascinating place that has be an old friend to Z generation
              people. I start using Internet when I was very young and I&apos;m
              impressed how i can sink all my time all day. The skill that I
              have about internet is memeposting and a little web development.
            </p>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
