"use client";

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <>
      <section className="px-8 py-16">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4 text-light-blue-800">
            Contact Us
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full lg:w-5/12 !text-gray-500"
          >
            Ready to get started? Feel free to reach out through the contact form,
            and let&apos;s embark on a journey of innovation and success.
          </Typography>
        </div>
        <div>
          <Card shadow={true} className="container mx-auto border border-gray/50">
            <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
              <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-[#8abdfe]">
                <Typography variant="h4" color="white" className="mb-2">
                  Contact Information
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto mb-8 text-base !text-black-500"
                >
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </Typography>
                <div className="flex gap-5 mb-3">
                  <MapPinIcon className="h-6 w-16 text-white" />
                  <Typography variant="h6" color="white" className="mb-2 w-auto">
                    280 & 281 Shubham Industry,
                    Makana Village – NH # 8, Kamrej Road,
                    Surat - 394150,
                    Gujarat - India
                  </Typography>
                </div>
                <a href={`tel:+919374725058`}>
                  <div className="flex gap-5">
                    <PhoneIcon className="h-6 w-6 text-white" />
                    <Typography variant="h6" color="white" className="mb-2">
                      +91-9374725058
                    </Typography>
                  </div>
                </a>

                <a href={`mailto:info@aquagreen.site`}>
                  <div className="flex my-2 gap-5">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                    <Typography variant="h6" color="white" className="mb-2">
                      info@aquagreen.site
                    </Typography>
                  </div>
                </a>
                <div className="flex mb-10 gap-5">
                  <GlobeAltIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white" className="mb-2">
                    www.aquagreen.site
                  </Typography>
                </div>
                <div className="flex items-center gap-5">
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-facebook text-lg" />
                  </IconButton>
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-instagram text-lg" />
                  </IconButton>
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-github text-lg" />
                  </IconButton>
                </div>
              </div>
              <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                <form action="#">
                  <div className="mb-8 grid gap-4 lg:grid-cols-2">
                    {/* @ts-ignore */}
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="First Name"
                      name="first-name"
                      placeholder="eg. Lucas"
                      containerProps={{
                        className: "!min-w-full mb-3 md:mb-0",
                      }}
                    />
                    {/* @ts-ignore */}
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="Last Name"
                      name="last-name"
                      placeholder="eg. Jones"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                    />
                  </div>
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="first-name"
                    placeholder="eg. lucas@mail.com"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                  />

                  {/* @ts-ignore */}
                  <Textarea
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Your Message"
                    name="first-name"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                  />
                  <div className="w-full flex justify-end">
                    <Button className="w-full md:w-fit bg-[#8abdfe]" color="gray" size="md">
                      Send message
                    </Button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
