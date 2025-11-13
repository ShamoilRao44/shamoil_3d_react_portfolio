import React from "react";

import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Profile</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Full-stack developer with expertise in building scalable mobile, web, and backend applications. Proficient in Flutter, FastAPI, and PostgreSQL with strong DevOps skills in Docker, Nginx, and CI/CD pipelines. Passionate about clean architecture, performance optimization, and seamless integrations. Experienced in REST/WebSocket protocols, Firebase services, and cloud deployments on VPS. Proven track record of delivering production-grade solutions and mentoring teams.
        </p>
      </motion.div>

      <div className="my-skills">
        {profiles.map((profile) => (
          <div className="skill" data-aos="fade-up" data-aos-delay="200" key={profile.link}>
            <div className="icon-container">
              <a href={profile.link} target="_blank" rel="noreferrer">
                <img src={profile.icon} alt="profile-link" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "");