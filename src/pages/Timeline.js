import React from "react";
import { Container } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { BsStackOverflow } from "react-icons/bs";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  return (
    <Container className="mt-4">
      <h4 className="text-center">Timeline</h4>
      <div className="mt-4">
        <VerticalTimeline>
          <VerticalTimelineElement
            className=""
            contentStyle={{ background: "rgb(6,23,40)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(251, 251, 251)" }}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            icon={<FcGoogle />}
          >
            <h3 className="">2019 - Present</h3>
            <h4 className="">Google, Mountain View, CA</h4>
            <p>
              I currently work as a Software Engineer at Google headquarters in
              Mountain View, California.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            id="fb"
            className=""
            contentStyle={{ background: "rgb(6,23,40)", color: "#fff" }}
            icon={<IoLogoFacebook />}
          >
            <h3 className="">Art Director</h3>
            <h4 className="">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            id="linkedin"
            className=""
            contentStyle={{ background: "rgb(6,23,40)", color: "#fff" }}
            icon={<GrLinkedin />}
          >
            <h3 className="">Web Designer</h3>
            <h4 className="">Los Angeles, CA</h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            contentStyle={{ background: "rgb(6,23,40)", color: "#fff" }}
            iconStyle={{ background: "rgb(242,116,13)", color: "#fff" }}
            icon={<BsStackOverflow />}
          >
            <h3 className="">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="">Online Course</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Container>
  );
};

export default Timeline;
