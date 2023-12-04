import { createContext } from "react";

const ProjectContext = createContext({
  show: false,
  setShow: (bool = false) => {},
  setData: (data = {}) => {},

  data: {
    title: "",
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