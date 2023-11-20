import Preloader from "./Preloader";
import { PreloaderSize } from "./types";

export default {
  title: "ui/Preloader",
  component: Preloader,
  parameters: {
    docs: {
      description: {
        component:
          "Preloader используется для показа анимации загрузки. Вы можете выбрать один из трех размеров: маленький, средний и большой.",
      },
    },
  },
};

export const Small = () => <Preloader size={PreloaderSize.Small} />;
Small.parameters = {
  docs: {
    storyDescription: "Маленький Preloader размером 25px.",
  },
};

export const Medium = () => <Preloader size={PreloaderSize.Medium} />;
Medium.parameters = {
  docs: {
    storyDescription: "Средний Preloader размером 50px.",
  },
};

export const Large = () => <Preloader size={PreloaderSize.Large} />;
Large.parameters = {
  docs: {
    storyDescription: "Большой Preloader размером 100px.",
  },
};

export const DefaultPreloader = () => <Preloader />;
DefaultPreloader.parameters = {
  docs: {
    storyDescription: "Preloader по умолчанию с размером 50px.",
  },
};
