import React from "react";
import { useParams } from "react-router-dom";

import Stockertim from "./projects/Stockertim";
import Plover from "./projects/Plover";
import Syur from "./projects/Syur";
import BallotMoney from "./projects/BallotMoney";
import Ratio from "./projects/Ratio";
import DefaultProject from "./projects/DefaultProject";

const projectLayouts = {
  stockertim: Stockertim,
  plover: Plover,
  syur: Syur,
  "ballot-money": BallotMoney,
  ratio: Ratio,
};

const ProjectDetails = () => {
  const { slug } = useParams();

  // Find the layout component based on the slug, default to standard/fallback layout
  const ProjectComponent = projectLayouts[slug] || DefaultProject;

  return <ProjectComponent slug={slug} />;
};

export default ProjectDetails;
