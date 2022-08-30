import { IStatsProps } from "types/appTypes.js";
import chooseClassByIndex from "../../utils/chooseClassByIndex.js";
import css from "./Statistics.module.css";

export const Statistics: React.FC<IStatsProps> = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((item, index) => {
          return (
            <li
              className={`${css.item} ${chooseClassByIndex(index, css)}`}
              key={item.id}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
