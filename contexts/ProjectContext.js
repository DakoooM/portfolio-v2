import { createContext } from "react";

const ProjectContext = createContext({
  show: false,
  setShow: (bool = false) => {},
  setData: (data = {}) => {},

  data: {
    title: "",
    website: "",
    category: "",
    maxTags: 4,
    tags: [],
    gallery: [],
    desc: "",
    minia: "",
    publishedAt: "",
  }
});

export default ProjectContext;