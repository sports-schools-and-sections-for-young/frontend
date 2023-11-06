import { ReasonsSectionProps } from "../../components/ReasonsSection/type";
import reliabilityImg from "../../assets/images/icons/reason-reliability.png";
import simplicityImg from "../../assets/images/icons/reason-simplicity.png";
import diversityImg from "../../assets/images/icons/reason-diversity.png";

export const reasonData: ReasonsSectionProps = {
  reasonArr: [
    {
      title: "Разнообразие",
      about: "Вы точно подберете секцию для вашего ребенка",
      description:
        "Большой выбор спортивных школ, и секций представленных на СпортХаб  удовлетворит интересы и потребности любого ребенка. ",
      img: diversityImg,
    },
    {
      title: "Простота",
      about: "Поиск на СпортХаб простой и удобный ",
      description:
        "Фильтруйте результаты по возрасту, местоположению, виду спорта и другим параметрам. Мы поможем найти тот самый идеальный вариант",
      img: simplicityImg,
    },
    {
      title: "Надежность",
      about: "Все школы на нашем сайте заслуживают доверия",
      description:
        "Мы тщательно выбираем партнеров и проверяем их квалификацию. СпортХаб гарантирует качество услуги безопасность ваших детей.",
      img: reliabilityImg,
    },
  ],
};
