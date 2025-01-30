import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <>
      <section className="relative mt-24 lg:mt-0 lg:h-[125vh] flex items-center">
        <div className="z-20 hidden lg:block">
          <Image
            src={"/img/home.png"}
            alt="Product illustration"
            width={950}
            height={500}
            className=" absolute top-0 right-0"
            priority
          />
        </div>

        <div className="container z-30">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Introduce Your Product Quickly & Effectively
              </h1>
              <p className="text-lg text-[#505F98]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  className="bg-[#111B47] hover:bg-[#111B47]/90"
                  size="lg"
                >
                  Purchase UI Kit
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:gap-16 items-center lg:grid-cols-2">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:order-last">
              <Image
                src="/img/section-1.png"
                alt="Person with flower petals"
                width={500}
                height={500}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#091133]">
                Light, Fast & Powerful
              </h2>
              <p className="text-base sm:text-lg text-[#6F7CB2] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-8 sm:gap-12">
                <div className="w-full sm:w-1/2 max-w-[200px] mx-auto">
                  <Image
                    src="/img/2-Line-Title.png"
                    alt="Feature 1"
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                  />
                </div>
                <div className="w-full sm:w-1/2 max-w-[200px] mx-auto">
                  <Image
                    src="/img/2-Line-Title.png"
                    alt="Feature 2"
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 items-center lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A237E]">
                Light, Fast & Powerful
              </h2>
              <p className="text-base sm:text-lg text-[#5C6BC0] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
              </p>
            </div>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:order-first">
              <Image
                src="/img/undraw_happy.png"
                alt="Person with flower petals"
                width={500}
                height={500}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 items-center lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A237E]">
                Light, Fast & Powerful
              </h2>
              <p className="text-base sm:text-lg text-[#5C6BC0] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
              </p>
            </div>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/img/undraw_social.png"
                alt="People around phone"
                width={400}
                height={400}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 items-center lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A237E]">
                Light, Fast & Powerful
              </h2>
              <p className="text-base sm:text-lg text-[#5C6BC0] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
              </p>
              <div className="pt-4">
                <Button
                  className="bg-[#111B47] hover:bg-[#1A237E] text-white w-full sm:w-auto"
                  size="lg"
                >
                  Purchase Now
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:order-first">
              <Image
                src="/img/undraw_mention.png"
                alt="People around phone"
                width={400}
                height={400}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#E7ECFF]/30">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-[#1A237E]">
            A Price To Suit Everyone
          </h2>
          <p className="text-base sm:text-lg text-[#6F7CB2] max-w-2xl mx-auto mb-12 sm:mb-16">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>

          <div className="space-y-4">
            <div className="text-[#222F65]">
              <span className="text-5xl sm:text-6xl font-bold">$40</span>
            </div>
            <div className="text-lg sm:text-xl text-[#37447E] font-medium">
              UI Design Kit
            </div>
            <p className="text-[#5D6970] mb-6 sm:mb-8">
              See, One price. Simple.
            </p>
            <Button className="bg-[#111B47] text-white hover:bg-[#1A237E]/90 px-6 sm:px-8 py-4 sm:py-6 text-base w-full sm:w-auto">
              Purchase Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
