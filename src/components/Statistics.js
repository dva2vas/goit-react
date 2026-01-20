import css from "./css/Statistics.module.css";

export const Statistics = ({title, stats}) => (
  <section className={css.statistics}>
    {title ? (<h2 className={css.title}>{title}</h2>) : (<h2 className={css.title}>Upload stats</h2>)} 
  <ul className={css["stat-list"]}>
        {stats.map((element, id)=>(
        <li key={id} className={css.item}>
          <span className={css.label}>{element.label}</span>
          <span className={css.percentage}>{element.percentage}</span>
        </li>
        ))}
  </ul>    
  </section>
);