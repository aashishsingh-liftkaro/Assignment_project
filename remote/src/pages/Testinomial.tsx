import "@/index.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/utils";


const Testimonials = () => {
  return (
    <section className=" bg-gray-50 px-4 py-4">
      <div className="mx-auto container ">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Testimonials
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            What Our Customers Say
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Hear from our customers about their experience and how our platform
            helps make their work easier.
          </p>
        </div>

        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-6xl  w-full "
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (

              <CarouselItem
                key={testimonial.name}
                className="basis-full  md:basis-1/2"
              >
                <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-5 leading-7 text-gray-600">
                    "{testimonial.message}"
                  </p>
                  <Button
                    className="mt-6 border border-gray-800 bg-white text-gray-900 hover:bg-gray-100"
                    variant="outline"
                  >
                    Read More
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
