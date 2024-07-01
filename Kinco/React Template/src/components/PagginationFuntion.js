const PagginationFuntion = ({ setActive, state, active }) => {
  return (
    <ul>
      <li className="custom">
        <a
          href="#"
          className="muted3-color"
          onClick={(e) => {
            e.preventDefault();
            setActive(active === 1 ? 1 : active - 1);
          }}
        >
          <i className="fas fa-chevron-left" />
        </a>
      </li>
      {state &&
        state.map((s, i) => (
          <li key={i}>
            <a
              className={`page-numbers ${active === s ? "active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActive(s);
              }}
            >
              {s}
            </a>
          </li>
        ))}

      <li className="custom st-2">
        <a
          href="#"
          className="muted3-color"
          onClick={(e) => {
            e.preventDefault();
            setActive(active === state.length ? state.length : active + 1);
          }}
        >
          <i className="fas fa-chevron-right" />
        </a>
      </li>
    </ul>
  );
};
export default PagginationFuntion;
