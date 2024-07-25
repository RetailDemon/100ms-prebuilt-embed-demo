"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HMSPrebuilt } from "@100mslive/roomkit-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMedkit,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="m-10 text-2xl font-bold">Zoom Party Test App</h1>
        <Link href="/call">
          <Button className="m-10">Join Party</Button>
        </Link>
      </header>
      <main>
        <section>
          <div className="flex flex-col md:flex-row justify-around ">
            <Card>
              <h1 className="text-6xl font-bold pt-10 px-10">
                Join
                <br />
                the ultimate
                <br />
                with party
                <br />
                now
              </h1>
              <h3 className="text-lg px-10 pt-5">
                Our goal is to empower you with the
                <br />
                freedom and resources you need to enjoy
                <br />
                the ultimate PNP virtual experience.
              </h3>

              <div>
                <Link href="/call">
                  <Button className="m-10 mr-2">Join Now</Button>
                </Link>

                <Button className="my-10" variant="outline">
                  Schedule your Meeting
                </Button>
              </div>
            </Card>

            <div className="rounded-2xl w-full lg:w-[850px] h-[800px] lg:h-[550px] overflow-hidden ">
              <HMSPrebuilt roomCode="rem-koqo-kng" />
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  2.7K
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  1.8K
                </h2>
                <p class="leading-relaxed">Subscribes</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  4000+
                </h2>
                <p class="leading-relaxed">Consultations</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  900
                </h2>
                <p class="leading-relaxed">Experts</p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mt-5 mb-20" />

        <section>
          <div>
            <h1 className="text-4xl font-bold text-center">How It Work</h1>
            <p className="text-base text-center my-5">
              I understand that time and experience are your
              <br />
              priority, so I simplified the whole process.
            </p>
            <div className="flex flex-row justify-evenly mt-20">
              <div className="flex flex-col">
                <Card className="p-5 w-20 grid justify-items-center">
                  <FontAwesomeIcon className="" icon={faVideo} />
                </Card>
                <h1 className="text-xl font-bold pt-5">Virtual Consultation</h1>
                <h3 className="text-base pt-2">
                  Take your PNP experience via video
                  <br />
                  or audio chat. Ask questions, and
                  <br />
                  get the answers you need.
                </h3>
              </div>
              <div className="flex flex-col">
                <Card className="p-5 w-20 grid justify-items-center">
                  <FontAwesomeIcon className="" icon={faMedkit} />
                </Card>
                <h1 className="text-xl font-bold pt-5">
                  Joining a Custom Room
                </h1>
                <h3 className="text-base pt-2">
                  To get your own custom video hosting 
                  <br />
                  experience, go to https://community.sonensolutions.com
                  <br />
                  and send a message to @Room-Master.
                </h3>
              </div>
              <div className="flex flex-col">
                <Card className="p-5 w-20 grid justify-items-center">
                  <FontAwesomeIcon className="" icon={faCalendar} />
                </Card>
                <h1 className="text-xl font-bold pt-5">
                  Rooms of up to 5,000 participants 
                </h1>
                <h3 className="text-base pt-2">
                  If you're looking to host a Meg room
                  <br />
                  experience with 100+ users
                  <br />
                  get in touch with @Room-Master
                </h3>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-20" />
      </main>

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" class="hover:underline">
              RETDEM STUDIO LLC.™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    alert("You've tried to open context menu"); //here you draw your own menu
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    alert("You've tried to open context menu");
    window.event.returnValue = false;
  });
}
