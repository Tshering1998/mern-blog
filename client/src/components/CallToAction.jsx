import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500  rounded-tl-3xl rounded-br-3xl text-center justify-center items-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about javascript</h2>
        <p className="text-gray-500 my-2">
          Checkout there resources with 100 Javascript Projects
        </p>

        <Button
          gradientDuoTone="purpleToPink"
          className="rouned-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.100jsproject.com"
            target="__blank"
            rel="noopener noreferrer"
          >
            100 javasript project
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://cdn.deliciousbrains.com/content/uploads/2017/04/09121256/javascript-filereader-api-file.jpg" />
      </div>
    </div>
  );
}
